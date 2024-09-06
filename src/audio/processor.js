/* global currentTime */
const SMOOTHING_FACTOR = 0.8;
const FRAME_PER_SECOND = 60;
const FRAME_INTERVAL = 1 / FRAME_PER_SECOND;

class AudioRecodingProcessor extends AudioWorkletProcessor {

    constructor() {
        super();
        this._lastUpdate = currentTime;
        this._volume = 0;
    }

    // Parameters are passed from the main thread
    static get parameterDescriptors() {
        return [
            {
                name: 'threshold',
                defaultValue: 0.01
            }
        ];
    }

    calculateRMS(inputChannelData) {
        // Calculate the squared-sum.
        let sum = 0;
        for (let i = 0; i < inputChannelData.length; i++) {
            sum += inputChannelData[i] * inputChannelData[i];
        }

        // Calculate the RMS level and update the volume.
        let rms = Math.sqrt(sum / inputChannelData.length);
        this._volume = Math.max(rms, this._volume * SMOOTHING_FACTOR);
    }


    process(inputs, outputs, parameters) {
        const threshold = parameters.threshold[0];

        // Check if there's audio data to process
        if (!(currentTime - this._lastUpdate > FRAME_INTERVAL))
            return true;

        let totalRMS = 0;
        let channelCount = inputs[0].length;

        // Iterate over each channel
        for (let channel = 0; channel < channelCount; channel++) {
            const inputChannelData = inputs[0][channel];
            this.calculateRMS(inputChannelData);
            totalRMS += this._volume;
        }

        // Calculate the average RMS across all channels
        let avgRMS = totalRMS / channelCount;
        this._volume = avgRMS; // Update the volume to the average RMS

        this._lastUpdate = currentTime;

        if (avgRMS > threshold) {
            let smoothened = avgRMS.toFixed(2);
            this.port.postMessage({ value: smoothened * 500, name: 'rms' });
        }

        return true;
    }
}

registerProcessor('audio-recording-processor', AudioRecodingProcessor);
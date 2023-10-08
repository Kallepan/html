FROM nginx:1.25-bookworm

# install dependencies
RUN apt-get update && apt-get install -y \
    curl \
    git \
    gnupg2 \
    lsb-release \
    sudo \
    unzip \
    wget \
    && rm -rf /var/lib/apt/lists/*

# create user user
RUN useradd -m -s /bin/bash user \
    && echo "user ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers.d/nopasswd

EXPOSE 80
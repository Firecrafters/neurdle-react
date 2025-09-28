# Use Node.js 20 with bun installed
FROM node:20-bullseye-slim

# Install system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    git \
    ca-certificates \
    gnupg \
    lsb-release \
    && rm -rf /var/lib/apt/lists/*

# Install bun
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

# Create a non-root user
RUN useradd -m -s /bin/bash node && \
    mkdir -p /home/node/.bun && \
    chown -R node:node /home/node/.bun

# Switch to non-root user
USER node
WORKDIR /home/node

# Install bun for the node user
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/home/node/.bun/bin:${PATH}"

# Set the working directory
WORKDIR /workspace

# Copy package files
COPY --chown=node:node package.json bun.lockb* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the rest of the application code
COPY --chown=node:node . .

# Expose the development server port
EXPOSE 3000 3001

# Default command
CMD ["bun", "run", "dev"]
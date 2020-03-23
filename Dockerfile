FROM keymetrics/pm2:latest-stretch
WORKDIR /usr/mine-server-bot

# Install git
RUN apt update && apt install -y git

# Clone project
RUN git clone https://gitlab.com/s.casatorres/steve-bot.git

# Bundle APP files
COPY src src/
COPY package.json .
COPY index.js .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN pm2 install pm2-auto-pull
RUN npm install --production

# Show current folder structure in logs
RUN ls -al -R

CMD ["pm2-runtime", "start"]
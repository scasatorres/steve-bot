FROM keymetrics/pm2:latest-alpine
WORKDIR /usr/mine-server-bot

# Install git
RUN apt-get install git

# Clone project
RUN git clone https://gitlab.com/s.casatorres/mine-server-bot.git

# Bundle APP files
COPY src src/
COPY package.json .
COPY ecosystem.config.js .
COPY index.js .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN pm2 install pm2-auto-pull
RUN npm install --production

# Show current folder structure in logs
RUN ls -al -R

CMD ["pm2-runtime", "index.js", "ecosystem.config.js", "--env", "production"]
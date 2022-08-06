#
#  Docker instruction set to for twitter-banner project.
#  Created On 06 August 2022
#

# a small base image
FROM node:18.7.0-alpine3.15

# run Node.js in production
ENV NODE_ENV=production

# define where our source code will be
WORKDIR /opt/twitter-banner

# copy this directory to the image
COPY . /opt/twitter-banner

# install Node.js and dependencies
RUN npm install --prod && \
    rm -rf /var/cache/apk/*

# run twitter-banner on container boot
CMD [ "node", "/opt/twitter-banner/src/twitter-banner.js" ]

#baza obrazu: alpine z node
FROM node:alpine

#dane autora i numer zadania
LABEL maintaner = "Wojciech Sarnowski"
LABEL description = "Zadanie 1"

#katalog roboczy
WORKDIR '/app'

#inicjacja projektu i instalacja moment-timezone
RUN npm init -y && \
npm install --save moment-timezone

#skopiowanie kodu serwera do obrazu
COPY index.js .

#nasłuchiwanie na porcie 3000
EXPOSE 3000

#urudzomienie serwera node z pliku index.js
ENTRYPOINT ["node"]
CMD ["index.js"]
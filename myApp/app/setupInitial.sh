echo "Starting Setup"

meteor npm install
meteor npm run start
meteor npm install --save bcrypt
meteor npm run lint
meteor npm run start 

echo "Done Installing"
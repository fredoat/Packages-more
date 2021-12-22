const express = require('express')
const app = express()
const shelterRoutes = require('./routes/shelters')
const dogsRoutes = require('./routes/dogs')

app.use('/shelters', shelterRoutes);
app.use('/dogs', dogsRoutes)

app.listen(3000, () => {
    console.log('APP IS LISTENING ON PORT 3000')
})
const express = require('express')
const bodyParser = require('body-parser')


const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))


let newItems = ['cook','eat']


app.get('/', (req, res) => {
  let today = new Date()

  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  let day = today.toLocaleDateString('en-US', options)

  //----------------------------------------
  // switch (currentDay) {
  //   case 0:
  //     day = 'Sunday'
  //     break;
  //   case 1:
  //     day = 'Monday'
  //     break;
  //   case 2:
  //     day = 'Tuesday'
  //     break;
  //   case 3:
  //     day = 'Wednesday'
  //     break;
  //   case 4:
  //     day = 'Thursday'
  //     break;
  //   case 5:
  //     day = 'Friday'
  //     break;
  //   case 6:
  //     day = 'Saturday'
  //     break;
  //   default:
  //     console.log(`Error: currentday is ${currentDay}`);
  // }
  //----------------------------------------
  // if(currentDay == 6 || currentDay == 0){
  //   day = 'Weekend'
  // } else {
  //   day = 'Weekday'
  // }
  //----------------------------------------
  res.render('list', {kindOfDay: day, newTodos: newItems})

})


app.post('/', (req, res) => {
  newItem = req.body.todo
  newItems.push(newItem)
  res.redirect('/')
})

app.listen(3000, () => {
  console.log('server is running on port 3000.')
})
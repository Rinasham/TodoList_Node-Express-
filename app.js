const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname + '/date.js')


const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))


const newItems = ['cook','eat']
const workItems =[]




//-----------------------------------------



app.get('/', (req, res) => {
  const day =  date.getDate()
  res.render('list', {title: day, newTodos: newItems})

})


app.post('/', (req, res) => {
  if(req.body.button === 'Work Todo'){
    workItem = req.body.todo
    workItems.push(workItem)
    res.redirect('/work')
  } else {
    newItem = req.body.todo
    newItems.push(newItem)
    res.redirect('/')
  }
})


app.get('/work', (req, res) =>{
  res.render('work', {title: 'Work Todo', newTodos: workItems})
})


app.listen(3000, () => {
  console.log('server is running on port 3000.')
})



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
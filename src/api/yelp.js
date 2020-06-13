import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer Us7b3SpUezHgEa53FypSDWV8kNW2hziUw3xkhAY63M5SpBGclK20LJlfDqQqDD3xSCFInV4OvPh2ZHyRw0MuOcBbuIXbxrrhAgQqO7a9FlcRH6x7d-ZJMqqNAWXVXnYx'
    }
})
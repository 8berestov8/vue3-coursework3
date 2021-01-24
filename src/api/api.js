import axios from 'axios'

const baseUrl = 'https://course-3-a6229-default-rtdb.firebaseio.com/tasks.json'

export default {
  tasks: {
    get() {
      return axios.get(baseUrl)
    },
    post(data) {
      return axios.post(baseUrl, data)
    },
  }
}

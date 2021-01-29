import axios from 'axios'

const baseUrl = 'https://course-3-a6229-default-rtdb.firebaseio.com/'

export default {
  tasks: {
    get() {
      return axios.get(baseUrl + `tasks.json`)
    },
    post(data) {
      return axios.post(baseUrl + `tasks.json`, data)
    },
    put(data) {
      return axios.put(baseUrl + `tasks/${data.id}.json`, data)
    }
  }
}

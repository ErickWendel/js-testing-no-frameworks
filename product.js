import { EventEmitter } from 'events'
export default class Product {
  constructor({ 
    onCreate, 
    service
  }) {
    this.service = service
    this.source = new EventEmitter()
    this.source.on('create', onCreate)
  }
  // data = { description, id, price }
  #isValid(data) {
    if(data.description.length < 5) {
      throw new Error('description must be higher than 5')
    }
  }

  // data = { description, id, price }
  #upperCaseStrings(data) {
    const finalObject = Reflect.ownKeys(data)
    .map(key => {
      const item = data[key]
      return {
        [key]: typeof item === 'string' ? item.toUpperCase() : item
      }
    })
    .reduce((prev, next) => {
      return {
        ...prev,
        ...next
      }
    }, {})


    return finalObject
  }


  async create(data) {
    this.#isValid(data)
    const mappedObject = this.#upperCaseStrings(data)
    const message = await this.service.save(mappedObject)
    this.source.emit('create', mappedObject)

    return message.toUpperCase()
  }
}
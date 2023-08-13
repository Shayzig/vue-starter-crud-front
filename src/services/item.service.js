import { httpService } from './http.service.js'
import { utilService } from './util.service.js'

export const itemService = {
    query,
    getById,
    save,
    remove,
    getEmptyItem,
}

window.cs = itemService // for console usage

async function query() {
    return httpService.get('item')
}
function getById(itemId) {
    return httpService.get(`item/${itemId}`)
}
async function remove(itemId) {
    return httpService.delete(`item/${itemId}`)
}
async function save(item) {
    var savedItem
    if (item._id) {
        savedItem = await httpService.put(`item/${item._id}`, item)
    } else {
        savedItem = await httpService.post('item', item)
    }
    return savedItem
}
function getEmptyItem() {
    return {
        title: 'item' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}
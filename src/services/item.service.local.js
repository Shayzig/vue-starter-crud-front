
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'item'

export const itemService = {
    query,
    getById,
    save,
    remove,
    getEmptyItem,
}
window.cs = itemService

async function query(filterBy = { txt: '', price: 0 }) {
    var items = await storageService.query(STORAGE_KEY)
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        items = items.filter(item => regex.test(item.vendor) || regex.test(item.description))
    }
    if (filterBy.price) {
        items = items.filter(item => item.price <= filterBy.price)
    }
    return items
}

function getById(itemId) {
    return storageService.get(STORAGE_KEY, itemId)
}

async function remove(itemId) {
    await storageService.remove(STORAGE_KEY, itemId)
}

async function save(item) {
    var savedItem
    if (item._id) {
        savedItem = await storageService.put(STORAGE_KEY, item)
    } else {
        savedItem = await storageService.post(STORAGE_KEY, item)
    }
    return savedItem
}

function getEmptyItem() {
    return {
        title: 'item' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}


// Initial data
// ;(async ()=>{
//     await storageService.post(STORAGE_KEY, {vendor: 'Subali Karov 1', price: 180})
//     await storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 240})
// })()
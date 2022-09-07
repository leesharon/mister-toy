import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'

export const toyService = {
    query,
    save,
    remove,
    getById,
}

const STORAGE_KEY = 'toyDB'
const BASE_URL = `toy/`
const gDefaultToys = _createToys(5)

function query(filterBy = { txt: '', inStock: '' }) {
    return httpService.get(BASE_URL, filterBy)
        .then(toys => toys)
}

function getById(toyId) {
    return httpService.get(BASE_URL + toyId)
}

function remove(toyId) {
    return httpService.delete(BASE_URL + toyId)
}

function save(toy) {
    if (toy._id) {
        return httpService.put(BASE_URL + toy._id, toy)
    } else {
        return httpService.post(BASE_URL, toy)
    }
}

function _createToys(num) {
    const toys = []
    for (let i = 0; i < num; i++) {
        toys.push(_createToy())
    }
    return toys
}

function _createToy() {
    return {
        "_id": utilService.makeId(),
        "name": utilService.getRandomName(),
        "price": utilService.getRandomIntInclusive(10, 100),
        "labels": ["Doll", "Battery Powered", "Baby"],
        "createdAt": Date.now(),
        "inStock": utilService.getRandomIntInclusive(0, 1) ? true : false,
        "reviews": [
            { name: 'Lee Sharon', rate: 5, txt: 'Best toy ever', createdAt: Date.now() },
            { name: 'Puki D.', rate: 3, txt: 'It breaks easily..', createdAt: Date.now() },
            { name: 'Shula F.', rate: 4, txt: 'My kid loves to play with it', createdAt: Date.now() }
        ]
    }
}

import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

export const toyService = {
    query,
    save,
    remove,
    getById,
}

const STORAGE_KEY = 'toyDB'
const gDefaultToys = _createToys(5)

function query(filterBy) {
    return storageService.query(STORAGE_KEY)
        .then(toys => {
            if (!toys || !toys.length) {
                storageService.postMany(STORAGE_KEY, gDefaultToys)
                toys = gDefaultToys
            }

            if (filterBy) {
                var { name, maxPrice, minPrice, label, inStock } = filterBy
                maxPrice = maxPrice || Infinity
                minPrice = minPrice || 0
                toys = toys.filter(toy =>
                    toy.name.toLowerCase().includes(name.toLowerCase())
                    && toy.labels.filter(currLabel => currLabel.includes(label))
                    && (toy.price < maxPrice)
                    && (toy.price > minPrice)
                    && (inStock ? (toy.inStock) : true)
                )
            }
            return toys
        })
}

function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}

function remove(toyId) {
    return storageService.remove(STORAGE_KEY, toyId)
}

function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        toy._id = utilService.makeId()
        toy.createdAt = Date.now()
        return storageService.post(STORAGE_KEY, toy)
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
        "price": '$' + utilService.getRandomIntInclusive(10, 100) + '.99',
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

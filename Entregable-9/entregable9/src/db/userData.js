import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('ecommerce.db')

export const initUserDB = () => {
    const promise = new Promise( (resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL, coords TEXT NOT NULL)',
                [],
                () => resolve(),
                (_, err) => reject(err)
            )
        })
    })
    return promise
}

export const insertUser = (title, image, address, coords) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( (tx) => {
            tx.executeSql(
                'INSERT INTO places (title, image, address, coords) VALUES (?,?,?,?)',
                [title, image, address, JSON.stringify(coords)],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    }) 
    return promise
}

export const deletePlace = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( (tx) => {
            tx.executeSql(
                'DELETE FROM places',
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise
}

export const updatePlace = (title, image, address, coords) => {
    deletePlace()
    .then ( () => {
        return (insertPlace(title, image, address, coords))
    })
}

export const getPlaces = () => {
    const promise = new Promise( (resolve, reject) => {
        db.transaction( (tx) => {
            tx.executeSql(
                'SELECT * FROM places',
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise 
}
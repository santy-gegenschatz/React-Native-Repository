import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('ecommerce.db')

export const initFavouritesDB = () => {
    const promise = new Promise( (resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS favourites (id INTEGER PRIMARY KEY NOT NULL, categoryId INTEGER NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL, price INTEGER NOT NULL, status TEXT NOT NULL, url TEXT NOT NULL)',
                [],
                () => resolve(),
                (_, err) => reject(err)
            )
        })
    })
    return promise
}

export const insertFavourite = (id, categoryId, title, description, price, status, url) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( (tx) => {
            tx.executeSql(
                'INSERT INTO favourites (id, categoryId, title, description, price, status, url) VALUES (?,?,?,?,?,?,?)',
                [id, categoryId, title, description, price, status, url],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    }) 
    return promise
}

export const getFavourites = () => {
    const promise = new Promise( (resolve, reject) => {
        db.transaction( (tx) => {
            tx.executeSql(
                'SELECT * FROM favourites',
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise 
}

export const deleteFavourite = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( (tx) => {
            tx.executeSql(
                'DELETE FROM favourites WHERE id = (?) ',
                [id],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise
}


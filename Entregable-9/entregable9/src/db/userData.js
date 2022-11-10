import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('ecommerce.db')

export const initUserDB = () => {
    const promise = new Promise( (resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS users (username TEXT NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL)',
                [],
                () => resolve(),
                (_, err) => reject(err)
            )
        })
    })
    return promise
}
// The cool thing about this method is that it allows to store in each row every modification the user makes
export const insertUserData = (username, image, address) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( (tx) => {
            tx.executeSql(
                'INSERT INTO users (username, image, address) VALUES (?,?,?)',
                [username, image, address],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    }) 
    return promise
}

export const getUserData = () => {
    const promise = new Promise( (resolve, reject) => {
        db.transaction( (tx) => {
            tx.executeSql(
                'SELECT * FROM users',
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise 
}
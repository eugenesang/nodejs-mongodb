# Filter

- Records Created later than a given date 
```js
// Date -> 02 Dec 2023
{
    createdAt: {
        $gt: new Date('Dec 2 2023')
    }
}
```

- Records created on December 2nd 2023
```js
{
    createdAt: {
        $gte: new Date('Dec 2 2023'), $lt: new Date('Dec 3 2023')
    }
}
```

- Records created on either November 25th or December 2nd
```js
{
    $or: [
        createdAt: {
            $gte: new Date('Dec 2 2023'), $lt: new Date('Dec 3 2023')
        },
        createdAt: {
            $gte: new Date('Nov 25 2023'), $lt: new Date('Nov 26 2023')
        }
    ]
}
```
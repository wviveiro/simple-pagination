# Simple React Pagination component

## Install
```
npm i wviveiro/simple-pagination
```


## Usage
```javascript
const [page, setPage] = useState(1);


return (
    <Pagination total={100} limit={20} page={page} changePage={(page) => setPage(page)} />
)
```

## Props
**page** - current page number

**total** - number of rows in total

**limit** - limit of rows per page

**changePage** - trigger the page that has to be called
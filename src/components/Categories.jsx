import React from 'react'

function Categories({chooseCategories}) {


    const categories = [
        {
            key: 'all',
            name: 'Всі'
        },
        {
            key: 'chain',
            name: 'Цепочки'
        },
        {
            key: 'ring',
            name: 'Кільця'
        },
    ]
    const [findCategories, setFindCategories] = React.useState(categories)

    return (
        <div className='categories'>
            {
                findCategories.map(el => (
                    <div key={el.key} onClick={()=>chooseCategories(el.key)}>
                        {el.name}
                    </div>
                ))
            }
        </div>
    )
}

export default Categories
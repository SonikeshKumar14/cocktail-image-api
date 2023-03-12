import React, { useState, useEffect, useCallback, useContext } from 'react'
import axios from 'axios'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    const [searchText, setSearchText] = useState('a')
    const [cocktails, setCocktails] = useState([])

    // const fetchDrinks = useCallback( async () => {
    //     setLoading(true)
    //     try {
    //       const response = await fetch(`${url}${searchText}`)
    //       const data = await response.json()
    //       console.log(data);
    //       const { drinks } = data
    //       if (drinks) {
    //         const newCocktails = drinks.map((item) => {
    //           const {
    //             idDrink,
    //             strDrink,
    //             strDrinkThumb,
    //             strInstructions,
    //           } = item
    
    //           return {
    //             id: idDrink,
    //             name: strDrink,
    //             image: strDrinkThumb,
    //             info: strInstructions,
    //           }
    //         })
    //         setCocktails(newCocktails)
    //       } else {
    //         setCocktails([])
    //       }
    //       setLoading(false)
    //     } catch (error) {
    //       console.log(error)
    //       setLoading(false)
    //     }
    //   },[searchText])
    //   useEffect(() => {
    //     fetchDrinks()
    //   }, [searchText,fetchDrinks])
    const fetchCocktail = useCallback(()=>{
      axios
        .get(url)
        .then((res)=>{
          console.log(res.data);
          setCocktails(res.data.drinks);
        })
        .catch((e) => console.log(e))
    }, []);
    
    useEffect(()=>{
      fetchCocktail()
    }, [fetchCocktail, searchText]);

    return (
        <AppContext.Provider value={{
            cocktails, 
            searchText, 
            setSearchText,
        }}>
          {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }



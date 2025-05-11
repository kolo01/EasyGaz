import React, { Component } from 'react';

import SearchBar from 'rn-search-bar';


export default function Search()  {
 
    return(
      <SearchBar
        onPress={
          (text:any) => console.log('You typed + ', text)
        }
        onChange={
          (text:any) => console.log(text)
        }
        containerStyle={{
          height:50,
          borderTopWidth:1,
          borderBottomWidth:1
        }}
        renderSearchIcon={true}
        clearTextOnPress={true}
        renderLeftIcon={true}
        searchIconSize={15}
        searchIconColor={'deeppink'}
        searchIconBackgroundColor={'aqua'}
        leftIconColor={'rgba(152,152,152,.7)'}
        leftIconSize={12}
        textStyle={{
          color: 'cyan'
        }}
      />
    )
  };


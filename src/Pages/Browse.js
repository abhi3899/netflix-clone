import React from 'react'
import {BrowseContainer} from '../Containers/browse'
import useContent from '../hooks/use-content'
import selectionMap from '../utils/selection-map'

const Browse = () => {
    const { series } = useContent('series');
    const { films } = useContent('films');
    const slides=selectionMap({series,films})
    console.log(slides)
    return (
          
           <BrowseContainer slides={slides} />
           
        
    )
}

export default Browse

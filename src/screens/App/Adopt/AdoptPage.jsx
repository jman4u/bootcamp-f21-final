import React from 'react'
import style from './AdoptPage.module.css'
import AnimalCard from '../../../components/AnimalCard/AnimalCard'


export default function AdoptPage({ animals }) {
  console.log(animals) //print all the animals in the console
  return (
    <div className = {style.container}>
      <h1> Browse Shelter Animals </h1>
      <div className = {style.list}>
        {
          //display all animals and a map of each animal linked with a card if it
          //if animals array is not null, then dont do the rest (in place of an if/then)
          animals && animals.map(animal => <AnimalCard animal = {animal} key = {animal.id}/>) 
        }
      </div>
    </div>
  )
}
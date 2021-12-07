import React from 'react'
import Image from 'next/image'
import styles from './AdminPage.module.css'
import ApplicationCard from '../../components/AdminList/ApplicationCard'
import AnimalCard from '../../components/AnimalCard/AnimalCard'


export default function AdminPage({ cats }) {
  return (
    <div>
      <input id={styles.search} placeholder="Enter a cat's name.." type="text"/>
      <div className={styles.main}>
        <div className = "Apps">
          <h2> Appointments </h2>
          {
            //list all of the appointments for each cat
            cats && cats.map(cat => <ApplicationCard cats = {cats} key = {AnimalCard.id}/>)
          }
        </div>
        <div class = {styles.AppInfo}>
          <div>

            {/*currently temp data*/}
            <h3>Name: Danny Fields</h3>
            <h3>Location: Atlanta, GA</h3>
            <h3>Email: dfields@gmail.com</h3>
            <h3>Phone#: (123) 456-7890</h3>
            <h3>Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna
               aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
               ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


            {/*
              These would reference to the properties outlined in the api, 
              changing each field based on the id of the current cat

            <h3 id={catName}>Name: Danny Fields</h3>
            <h3 id={catLocation}>Location: Atlanta, GA</h3>
            <h3 id={catEmail}>Email: dfields@gmail.com</h3>
            <h3 id={catPhone}>Phone#: (123) 456-7890</h3>
            <h3>Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna
               aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
               ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            */}
          </div>
          <button className={styles.approve}>Approve</button>
        </div>
      </div>
    </div>
  )
}
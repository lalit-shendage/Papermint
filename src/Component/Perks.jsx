import React from 'react'
import '../style/Perk.css'

const Perks = () => {
  const benefitsData = [
    {
      image: 'https://hr.uark.edu/_resources/images/healthcare-1170.jpg', 
      title:'Health benifits',
      content: 'Health insurence for employees and family that covers medical and accidental concerns',
    },
    {
      image: 'https://assets.hongkiat.com/uploads/positive-working-environment/open-communication.jpg', 
      title:'Work environment ',
      content: 'We encoarage indivisual grwoth and celebrate each others success. A close family of highly talented indivisuals.',
    },
    {
      image: 'https://static01.nyt.com/images/2016/08/11/well/well_nutritionforrunners_gif/well_nutritionforrunners_gif-blog480-v2.jpg', 
      title:'Food',
      content: 'Enjoy free meals and snacks to keep you energized throughout the day. ',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRmwOvl16O1UqHNFZYA2JjsPwsig7mF8TMs1aEP21N6AHaC8YLeO9z-4PX7yg7cygNl0&usqp=CAU', 
      title:'Flexibility',
      content: 'Experience flexible work hours and remote work options for better convenience.',
    },
  ];
  return (
    <div className='container'>
    <h2>Join our team today</h2>
    {benefitsData.map((benefit, index) => (
      <div key={index} className={`perk ${index % 2 === 0 ? 'even' : 'odd'}`}>
        <img src={benefit.image} alt={`Benefit ${index + 1}`} className='perk-image' />
        <div className='perk-content'><h3>{benefit.title}</h3>{benefit.content}</div>
      </div>
    ))}
  </div>
  )
}

export default Perks

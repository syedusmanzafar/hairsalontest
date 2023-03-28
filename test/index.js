export const state = () => ({
  menuleft: [
    { title: 'Home', to: '/' },
    { title: 'About Us', to: '/about-us' },
    { title: 'Services', to: '/services' },
  ],
  menuright: [
    { title: 'Book Now', to: '/book-appointment' },
    { title: 'Blogs', to: '/blog' },
    { title: 'Contact Us', to: '/contact-us' },
  ],
  slides: [
    {
      title1: "Nick's Hair Salon in Oak Bay",
      title2: '',
      text: 'Book an appointment online by clicking the link below.',
      to: '/book-appointment',
      totext: 'Book an Appointment',
      image: '/xnicks-hair-salon-one.webp',
    },
    {
      title1: "Nick's Hair Salon in Oak Bay",
      title2: '',
      text: 'Book an appointment online by clicking the link below.',
      to: '/book-appointment',
      totext: 'Book an Appointment',
      image: '/xnicks-hair-salon-two.webp',
    },
    {
      title1: "Nick's Hair Salon in Oak Bay",
      title2: '',
      text: 'Book an appointment online by clicking the link below.',
      to: '/book-appointment',
      totext: 'Book an Appointment',
      image: '/xnicks-hairs-salon.webp',
    },
  ],
  pricing: [
    {
      name: "Regular Men's cut",
      price: '$25.00',
      icon: '/cissor.webp',
    },
    {
      name: "Senior's Cut",
      price: '$21.00',
      icon: '/cissor.webp',
    },
    {
      name: 'Buzz Cut',
      price: '$18.00',
      icon: '/cissor.webp',
    },
    {
      name: "Ladie's Cut",
      price: '$30.00',
      icon: '/cissor.webp',
    },
    {
      name: 'Beard Trim',
      price: '$8.00',
      icon: '/trimmer.webp',
    },

    {
      name: 'Children Under 8',
      price: '$22.00',
      icon: '/cissor.webp',
    },
  ],
  barbers: [
    { name: 'Christine', url: 'https://calendly.com/nickshairsalon/christine' },
    {
      name: 'Nicki',
      url: 'https://calendly.com/nicki-nicks/nicki?month=2020-12',
    },
    { name: 'Crystal', url: 'https://calendly.com/crystal-nicks/crystal' },
    { name: 'Em', url: 'https://calendly.com/emilyatnicks/30min' },
  ],
})

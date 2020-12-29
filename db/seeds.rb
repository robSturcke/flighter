airlines = Airline.create([
                            {
                              name: 'United Airlines',
                              image_url: 'https://res.cloudinary.com/dip34kv9y/image/upload/v1608695200/flighter/United-Airlines_qhc0ez.png'
                            },
                            {
                              name: 'Southwest',
                              image_url: 'https://res.cloudinary.com/dip34kv9y/image/upload/v1609198168/flighter/southewest_g1wuwf.png'
                            },
                            {
                              name: 'Delta',
                              image_url: 'https://res.cloudinary.com/dip34kv9y/image/upload/v1609198168/flighter/delta_oysvmp.png'
                            },
                            {
                              name: 'Alaska Airlines',
                              image_url: 'https://res.cloudinary.com/dip34kv9y/image/upload/v1609198168/flighter/AlaskaAirlines_tvlrsq.png'
                            },
                            {
                              name: 'JetBlue',
                              image_url: 'https://res.cloudinary.com/dip34kv9y/image/upload/v1609198168/flighter/JetBlue_uqobzc.png'
                            },
                            {
                              name: 'American Airlines',
                              image_url: 'https://res.cloudinary.com/dip34kv9y/image/upload/v1609198168/flighter/American-Airlines_ee8cmh.png'
                            }
                          ])

reviews = Review.create([{
                          title: 'Great flight!',
                          description: 'I had a great flight',
                          score: 5,
                          airline: airlines.first
                        },
                         {
                           title: 'Terrible flight!',
                           description: 'I had a horrible flight.',
                           score: 1,
                           airline: airlines.first
                         }])

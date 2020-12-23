airlines = Airline.create([
                            {
                              name: 'United Airlines',
                              image_url: 'https://res.cloudinary.com/dip34kv9y/image/upload/v1608695200/flighter/United-Airlines_qhc0ez.png'
                            },
                            {
                              name: 'Southwest',
                              image_url: 'https://res.cloudinary.com/dip34kv9y/image/upload/v1608695200/flighter/Southwest-Airlines_xlzkbg.png'
                            },
                            {
                              name: 'Delta',
                              image_url: 'https://res.cloudinary.com/dip34kv9y/image/upload/v1608695200/flighter/Delta_znc5ph.png'
                            },
                            {
                              name: 'Alaska Airlines',
                              image_url: 'https://res.cloudinary.com/dip34kv9y/image/upload/v1608695200/flighter/Alaska-Airlines_qvg2jq.png'
                            },
                            {
                              name: 'JetBlue',
                              image_url: 'https://res.cloudinary.com/dip34kv9y/image/upload/v1608695200/flighter/JetBlue_sjdcu9.png'
                            },
                            {
                              name: 'American Airlines',
                              image_url: 'https://res.cloudinary.com/dip34kv9y/image/upload/v1608695200/flighter/American-Airlines_wq45og.png'
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

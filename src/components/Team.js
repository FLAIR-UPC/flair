const people = [
    {
      name: 'Ilker Demirkol',
      role: 'Project Leader',
      imageUrl:
        'Ilker',
    },
    {
    name: 'Anass Anhari',
    role: 'Contributor',
    imageUrl:
        // https://drive.google.com/file/d/1aMwgRJAf4Bmkm-vcPRKK35VAtWLsKEEB/view?usp=share_link
        // 'https://drive.google.com/uc?export=view&id=1aMwgRJAf4Bmkm-vcPRKK35VAtWLsKEEB'
        'Anass'
    },
    {
    name: 'Daniel Alamillo',
    role: 'Contributor',
    imageUrl:
        // https://drive.google.com/file/d/1QfuzB5agcJ31uGNO2_kKqHH0oR5tqpyw/view?usp=sharing
        // 'https://drive.google.com/uc?export=view&id=1QfuzB5agcJ31uGNO2_kKqHH0oR5tqpyw',
        'Daniel'
    }
  ]
  
  export default function Team() {
    return (
      <div className="bg-transparent py-24 sm:py-32 opacity-100">
        <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Alone we can do so little, together we can achieve greatness. Meet our talented team and let's embark on a journey towards success!
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={require('../images/' + person.imageUrl + '.jpeg')} alt={person.name} />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  
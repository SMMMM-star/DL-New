export const weapons = [
  {
    id: 'ak47',
    name: 'AK-47',
    type: 'Assault Rifle',
    image: 'https://images.unsplash.com/photo-1605657529900-9cd36defa7e0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm16',
    name: 'M16',
    type: 'Assault Rifle',
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm4',
    name: 'M4 Carbine',
    type: 'Carbine',
    image: 'https://images.unsplash.com/photo-1595590424247-79b8c1c829b7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mp5',
    name: 'MP5',
    type: 'Submachine Gun',
    image: 'https://images.unsplash.com/photo-1595590424264-ad664c4a2e05?auto=format&fit=crop&w=800&q=80'
  }
];

export const ammunition = [
  {
    id: '556',
    name: '5.56×45mm NATO',
    type: 'Rifle Ammunition',
    image: 'https://images.unsplash.com/photo-1595590424221-e4ede69e0690?auto=format&fit=crop&w=800&q=80',
    compatibleWeapons: ['m16', 'm4']
  },
  {
    id: '762',
    name: '7.62×39mm',
    type: 'Rifle Ammunition',
    image: 'https://images.unsplash.com/photo-1595590424308-32445b896df8?auto=format&fit=crop&w=800&q=80',
    compatibleWeapons: ['ak47']
  },
  {
    id: '9mm',
    name: '9×19mm Parabellum',
    type: 'Pistol Ammunition',
    image: 'https://images.unsplash.com/photo-1595590424174-7c80f9c5c5a1?auto=format&fit=crop&w=800&q=80',
    compatibleWeapons: ['mp5']
  }
];
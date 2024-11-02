import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useAuthStore } from '../stores/authStore';
import { useHistoryStore } from '../stores/historyStore';
import { useFeedbackStore } from '../stores/feedbackStore';
import { weapons, ammunition } from '../data/weapons';
import { predictAmmoSupply } from '../utils/predictions';
import Map3D from '../components/Map3D';
import { MessageSquare } from 'lucide-react';

const STATES = ['Maharashtra', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Delhi'];
const ZONES = ['North', 'South', 'East', 'West', 'Central'];

export default function UserDashboard() {
  // ... rest of the component remains exactly the same as before
}
import { Client } from 'appwrite';

const client = new Client();
client.setProject(import.meta.env.VITE_ENDPOINT);

client.setEndpoint()
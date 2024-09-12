// pages/api/invitation.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import clientPromise from '../lib/mongodb';

interface Invitation {
  name: string;
  location: string;
  date: string;
  time: string;
}

export async function GET(req: Request, res: Response) {
  try {
    const client = await clientPromise;
    const db = client.db('osoby_osiemnastka');
    const invitation = await db.collection('zaproszeni').find({}).toArray();
    //console.log(invitation);
    const invitationsCount = await db.collection('zaproszeni').countDocuments();
    const info = await db.collection('info').findOne({});
    const all = Object.assign({}, invitation, info, { count: invitationsCount });

    console.log(all);
    console.log('===================================');
    console.log(JSON.stringify(all));
    if (!invitation || !info) {
      //return new NextResponse.json( {error: 'Invitation not found' }, { status: 404 });
      return res.json({ error: 'Invation not found' }, { status: 404 });
    }
    //return new NextResponse(JSON.stringify(all), { status: 200, headers: { 'content-type': 'application/json' }});
    return new Response(JSON.stringify(all), { status: 200, headers: { 'content-type': 'application/json ' }});
  } catch (e) {
    console.error(e);
    //return NextResponse.json({ error: "inter" }, { status: 500 });
    return res.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: Request, res: Response) {
  try {
    const client = await clientPromise;
    const db = client.db('osoby_osiemnastka');
    const newInvitation: Invitation = req.body;

    if (!newInvitation.imie_nazwisko || !newInvitation.location || !newInvitation.date || !newInvitation.time) {
      //return new NextResponse.json({ error: 'Missing fields' }, { status: 400 });
      return res.json({ error: 'Missing fields' }, { status: 400 });
    }

    const result = await db.collection('zaproszeni').insertOne(newInvitation);
    //return new NextResponse.json({ message: 'Invitation created' }, { status: 201 });
    return res.json({ message: 'Invation created' }, { status: 201 });
  } catch (e) {
    console.error(e);
    //return new NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    return res.json({ error: 'Internal server Error' }, { status: 500 });
  }
}

export async function DELETE(req: Request, res: Response) {
  try {
    const client = await clientPromise;
    const db = client.db('osoby_osiemnastka');

    const result = await db.collection('zaproszeni').deleteOne({});

    if (result.deletedCount === 0) {
      //return new NextResponse.json({ error: 'No invitation found to delete' }, { status: 404 });
      return res.json({ error: 'No invation found to delete ' }, { status: 404 });
    }

    //return new NextResponse.json({ message: 'Invitation deleted' }, { status: 200 });
    return res.json({ message: 'Invation deleted' }, { status: 200 });
  } catch (e) {
    console.error(e);
    //return new NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    return res.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

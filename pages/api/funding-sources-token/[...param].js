import { getSession } from '@auth0/nextjs-auth0';
import { createFundingSourcesToken } from '../../../app/dwolla';

export default async function (req, res) {
  const s = await getSession(req, res);
  if (!s) return res.status(401).json({ error: 'unauthorized' });
  const { param } = req.query;
  const token = await createFundingSourcesToken(param);
  return res.status(200).json({ token });
}

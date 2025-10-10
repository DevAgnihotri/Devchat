import { redirect } from 'next/navigation';

export default function ForumBasePage() {
  // Redirect /forum to /forums (the listing page)
  redirect('/forums');
}

export default function tweetLinks(input) {
  if (!input) return;
  return input.entities.urls.map(item => item.expanded_url);
};

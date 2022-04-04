import { useEffect, useState } from "react"

const useReview = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch('review.json')
      .then(res => res.json())
      .then(data => setReviews(data))
    setLoading(false);

  }, [])

  return [reviews, setReviews, loading];
}

export default useReview;
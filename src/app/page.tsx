import Link from "next/link";

const mockData = [
  "https://utfs.io/f/2tX6BTfzrPHp5yo4KF9Ze4Er9I3TUCGoDdXQLF67zfsmMh05",
  "https://utfs.io/f/2tX6BTfzrPHp7w4zG1uM9CFhweTGvKk8OiS5mxRdZq02zLQX",
  "https://utfs.io/f/2tX6BTfzrPHpzvrNw9Bwkcxeu3bVBQ6Z2PaJKYdnSDiWjETL",
  "https://utfs.io/f/2tX6BTfzrPHptzih35g6mNIqX8KVOfciUoEFrkA7b9HgyCuW"
]

const mockImages = mockData.map((url, index) => ({
  id: index +1,
  url
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}

import Faker from "faker";

const data = {
  user: {
    userName: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
    avatar: Faker.image.avatar()
  },
  tablePage: {
    items: Array.from({ length: 105 }, (item, index) => ({
      id: index,
      name: Faker.commerce.productName(),
      price: Faker.commerce.price(),
      category: Faker.commerce.productMaterial()
    }))
  },

  blogs: [
    {
      "data": [
        {
          "owner": {
            "id": "60d0fe4f5311236168a10a2c",
            "title": "mr",
            "firstName": "Toralf",
            "lastName": "Streicher",
            "email": "toralf.streicher@example.com",
            "picture": "https://randomuser.me/api/portraits/med/men/80.jpg"
          },
          "id": "60e374e87ee938c31c923f59",
          "likes": 0,
          "tags": [
            "tag1",
            "tag2"
          ],
          "appId": "60d0c9c111f09556e2187758",
          "publishDate": "2021-07-05T21:08:56.226Z",
          "updatedAt": "2021-07-05T21:09:31.257Z",
          "text": "Some text here"
        },
        {
          "owner": {
            "id": "60d0fe4f5311236168a10a2c",
            "title": "mr",
            "firstName": "Toralf",
            "lastName": "Streicher",
            "email": "toralf.streicher@example.com",
            "picture": "https://randomuser.me/api/portraits/med/men/80.jpg"
          },
          "id": "60e373343334b1c2ca5b015e",
          "likes": 0,
          "tags": [

          ],
          "appId": "60d0c9c111f09556e2187758",
          "publishDate": "2021-07-05T21:01:40.536Z",
          "updatedAt": "2021-07-05T21:02:02.065Z",
          "text": "Some text here"
        },
        {
          "owner": {
            "id": "60d0fe4f5311236168a109ca",
            "title": "ms",
            "firstName": "Sara",
            "lastName": "Andersen",
            "email": "sara.andersen@example.com",
            "picture": "https://randomuser.me/api/portraits/women/58.jpg"
          },
          "id": "60d21b4667d0d8992e610c85",
          "image": "https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg",
          "publishDate": "2020-05-24T14:53:17.598Z",
          "text": "adult Labrador retriever",
          "tags": [
            "animal",
            "dog",
            "golden retriever"
          ],
          "link": "https://www.instagram.com/teddyosterblomphoto/",
          "likes": 43
        },
        {
          "owner": {
            "id": "60d0fe4f5311236168a10a0b",
            "title": "miss",
            "firstName": "Margarita",
            "lastName": "Vicente",
            "email": "margarita.vicente@example.com",
            "picture": "https://randomuser.me/api/portraits/med/women/5.jpg"
          },
          "id": "60d21b4967d0d8992e610c90",
          "image": "https://img.dummyapi.io/photo-1510414696678-2415ad8474aa.jpg",
          "publishDate": "2020-05-24T07:44:17.738Z",
          "text": "ice caves in the wild landscape photo of ice near gray cliff",
          "tags": [
            "snow",
            "ice",
            "mountain"
          ],
          "link": null,
          "likes": 31
        },
        {
          "owner": {
            "id": "60d0fe4f5311236168a109ed",
            "title": "miss",
            "firstName": "Kayla",
            "lastName": "Bredesen",
            "email": "kayla.bredesen@example.com",
            "picture": "https://randomuser.me/api/portraits/med/women/13.jpg"
          },
          "id": "60d21b8667d0d8992e610d3f",
          "image": "https://img.dummyapi.io/photo-1515376721779-7db6951da88d.jpg",
          "publishDate": "2020-05-24T05:44:55.297Z",
          "text": "@adventure.yuki frozen grass short-coated black dog sitting on snow",
          "tags": [
            "dog",
            "pet",
            "canine"
          ],
          "link": null,
          "likes": 16
        },
        {
          "owner": {
            "id": "60d0fe4f5311236168a109d5",
            "title": "mrs",
            "firstName": "Sibylle",
            "lastName": "Leibold",
            "email": "sibylle.leibold@example.com",
            "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
          },
          "id": "60d21b3a67d0d8992e610c60",
          "image": "https://img.dummyapi.io/photo-1581804928342-4e3405e39c91.jpg",
          "publishDate": "2020-05-23T22:56:11.424Z",
          "text": "Hiking with my dog in the woods. black labrador retriever on brown grass field during daytime",
          "tags": [
            "canine",
            "pet",
            "mammal"
          ],
          "link": "https://idiotknowledge.com/vc-es-prods/",
          "likes": 7
        },
        {
          "owner": {
            "id": "60d0fe4f5311236168a109f7",
            "title": "mrs",
            "firstName": "Jolanda",
            "lastName": "Lacroix",
            "email": "jolanda.lacroix@example.com",
            "picture": "https://randomuser.me/api/portraits/med/women/32.jpg"
          },
          "id": "60d21bf967d0d8992e610e9b",
          "image": "https://img.dummyapi.io/photo-1574457547512-5b1646994eea.jpg",
          "publishDate": "2020-05-23T18:52:32.613Z",
          "text": "Two boys hug their dogs in a leaf pile in the fall. smiling boys with dogs",
          "tags": [
            "dog",
            "human",
            "animal"
          ],
          "link": "https://www.flashesofun.com/",
          "likes": 28
        },
        {
          "owner": {
            "id": "60d0fe4f5311236168a109e4",
            "title": "mr",
            "firstName": "Pwry",
            "lastName": "Shylyrd",
            "email": "pwry.shylyrd@example.com",
            "picture": "https://randomuser.me/api/portraits/med/men/37.jpg"
          },
          "id": "60d21b7d67d0d8992e610d25",
          "image": "https://img.dummyapi.io/photo-1498534928137-473daa67f5c4.jpg",
          "publishDate": "2020-05-23T14:42:22.808Z",
          "text": "Bone salt and pepper schnauzer puppy",
          "tags": [
            "dog",
            "animal",
            "pet"
          ],
          "link": null,
          "likes": 18
        },
        {
          "owner": {
            "id": "60d0fe4f5311236168a10a0f",
            "title": "mr",
            "firstName": "Kaya",
            "lastName": "Basoglu",
            "email": "kaya.basoglu@example.com",
            "picture": "https://randomuser.me/api/portraits/med/men/59.jpg"
          },
          "id": "60d21bd767d0d8992e610e31",
          "image": "https://img.dummyapi.io/photo-1576707064479-3139e7e8aace.jpg",
          "publishDate": "2020-05-23T12:55:22.576Z",
          "text": "Sleeping dogs lie two dogs lying on black textile",
          "tags": [
            "animal",
            "canine",
            "dog"
          ],
          "link": "http://studionorthcreative.com",
          "likes": 19
        },
        {
          "owner": {
            "id": "60d0fe4f5311236168a10a29",
            "title": "ms",
            "firstName": "Vanessa",
            "lastName": "Ramos",
            "email": "vanessa.ramos@example.com",
            "picture": "https://randomuser.me/api/portraits/med/women/33.jpg"
          },
          "id": "60d21baa67d0d8992e610da7",
          "image": "https://img.dummyapi.io/photo-1500879747858-bb1845b61beb.jpg",
          "publishDate": "2020-05-22T22:27:12.912Z",
          "text": "Dog in a forest at sunset dog in forest with sun rays",
          "tags": [
            "dog",
            "animal",
            "golden retriever"
          ],
          "link": "http://www.waguluz.de",
          "likes": 242
        },
        {
          "owner": {
            "id": "60d0fe4f5311236168a109e4",
            "title": "mr",
            "firstName": "Pwry",
            "lastName": "Shylyrd",
            "email": "pwry.shylyrd@example.com",
            "picture": "https://randomuser.me/api/portraits/med/men/37.jpg"
          },
          "id": "60d21af967d0d8992e610ba1",
          "image": "https://img.dummyapi.io/photo-1568572933382-74d440642117.jpg",
          "publishDate": "2020-05-22T20:05:03.653Z",
          "text": "black and white Husky",
          "tags": [
            "dog",
            "animal",
            "husky"
          ],
          "link": "https://instagram.com/ashgoldy",
          "likes": 79
        },
        {
          "owner": {
            "id": "60d0fe4f5311236168a109ce",
            "title": "mr",
            "firstName": "Rudi",
            "lastName": "Droste",
            "email": "rudi.droste@example.com",
            "picture": "https://randomuser.me/api/portraits/med/men/83.jpg"
          },
          "id": "60d21aeb67d0d8992e610b79",
          "image": "https://img.dummyapi.io/photo-1579562243430-4732bcb09d91.jpg",
          "publishDate": "2020-05-22T07:50:38.093Z",
          "text": "Milo durmiendo después de un largo día de jugar en el río brown short coated dog lying on white textile",
          "tags": [
            "dog",
            "pet",
            "animal"
          ],
          "link": null,
          "likes": 17
        },
        {
          "owner": {
            "id": "60d0fe4f5311236168a109dd",
            "title": "mr",
            "firstName": "Miguel",
            "lastName": "Lima",
            "email": "miguel.lima@example.com",
            "picture": "https://randomuser.me/api/portraits/med/men/31.jpg"
          },
          "id": "60d21bad67d0d8992e610daf",
          "image": "https://img.dummyapi.io/photo-1568480541687-16c2f73eea4c.jpg",
          "publishDate": "2020-05-22T06:33:02.593Z",
          "text": "Gratitude short-coated tan dog on seashore",
          "tags": [
            "dog",
            "beach",
            "shoreline"
          ],
          "link": null,
          "likes": 12
        },
        {
          "owner": {
            "id": "60d0fe4f5311236168a109e6",
            "title": "miss",
            "firstName": "Milla",
            "lastName": "Pollari",
            "email": "milla.pollari@example.com",
            "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
          },
          "id": "60d21bee67d0d8992e610e79",
          "image": "https://img.dummyapi.io/photo-1517884467367-ac2e21e46d0b.jpg",
          "publishDate": "2020-05-22T03:10:54.820Z",
          "text": "@adventure.yuki peekaboo adult short-coated black dog selective focus photography",
          "tags": [
            "pet",
            "canine",
            "grey"
          ],
          "link": null,
          "likes": 43
        },
        {
          "owner": {
            "id": "60d0fe4f5311236168a10a12",
            "title": "mr",
            "firstName": "Kenneth",
            "lastName": "Carter",
            "email": "kenneth.carter@example.com",
            "picture": "https://randomuser.me/api/portraits/med/men/40.jpg"
          },
          "id": "60d21bd267d0d8992e610e21",
          "image": "https://img.dummyapi.io/photo-1548658146-f142deadf8f7.jpg",
          "publishDate": "2020-05-21T22:15:26.266Z",
          "text": "front view of black and white puppy sitting on brown sofa",
          "tags": [
            "dog",
            "grey",
            "puppy"
          ],
          "link": "https://www.danlincoln.com",
          "likes": 92
        },
        {
          "owner": {
            "id": "60d0fe4f5311236168a109e7",
            "title": "mr",
            "firstName": "Joey",
            "lastName": "Oliver",
            "email": "joey.oliver@example.com",
            "picture": "https://randomuser.me/api/portraits/med/men/61.jpg"
          },
          "id": "60d21b1a67d0d8992e610c05",
          "image": "https://img.dummyapi.io/photo-1535008652995-e95986556e32.jpg",
          "publishDate": "2020-05-21T15:53:26.275Z",
          "text": "Random man walking with his dogs man and dogs on the seashore",
          "tags": [
            "human",
            "ocean",
            "nature"
          ],
          "link": "https://www.instagram.com/takemeoutphotography/",
          "likes": 15
        },
        {
          "owner": {
            "id": "60d0fe4f5311236168a109e3",
            "title": "mr",
            "firstName": "Vetle",
            "lastName": "Aasland",
            "email": "vetle.aasland@example.com",
            "picture": "https://randomuser.me/api/portraits/med/men/97.jpg"
          },
          "id": "60d21be267d0d8992e610e52",
          "image": "https://img.dummyapi.io/photo-1580734075803-ac9cdb54fb03.jpg",
          "publishDate": "2020-05-21T15:15:02.703Z",
          "text": "Majestic looking dog on a lake white and brown short coated dog on snow covered ground during daytime",
          "tags": [
            "dog",
            "canine",
            "animal"
          ],
          "link": null,
          "likes": 3
        },
        {
          "owner": {
            "id": "60d0fe4f5311236168a10a1a",
            "title": "mr",
            "firstName": "Vaino",
            "lastName": "Sakala",
            "email": "vaino.sakala@example.com",
            "picture": "https://randomuser.me/api/portraits/med/men/56.jpg"
          },
          "id": "60d21b3667d0d8992e610c56",
          "image": "https://img.dummyapi.io/photo-1558556249-076e42967a24.jpg",
          "publishDate": "2020-05-21T07:03:58.248Z",
          "text": "two puppies next to each other",
          "tags": [
            "dog",
            "animal",
            "canine"
          ],
          "link": null,
          "likes": 27
        },
        {
          "owner": {
            "id": "60d0fe4f5311236168a109fa",
            "title": "ms",
            "firstName": "Ann",
            "lastName": "Mason",
            "email": "ann.mason@example.com",
            "picture": "https://randomuser.me/api/portraits/med/women/18.jpg"
          },
          "id": "60d21b0767d0d8992e610bcf",
          "image": "https://img.dummyapi.io/photo-1556526588-a0bd9b5a42c3.jpg",
          "publishDate": "2020-05-21T02:10:33.421Z",
          "text": "two white dogs",
          "tags": [
            "canine",
            "dog",
            "pet"
          ],
          "link": null,
          "likes": 54
        },
        {
          "owner": {
            "id": "60d0fe4f5311236168a10a2c",
            "title": "mr",
            "firstName": "Toralf",
            "lastName": "Streicher",
            "email": "toralf.streicher@example.com",
            "picture": "https://randomuser.me/api/portraits/med/men/80.jpg"
          },
          "id": "60d21afd67d0d8992e610bad",
          "image": "https://img.dummyapi.io/photo-1575495679620-2ff225c75d5a.jpg",
          "publishDate": "2020-05-20T21:49:33.321Z",
          "text": "A picture of my golden doodle, Yogi Bear white dog",
          "tags": [
            "pet",
            "animal",
            "mammal"
          ],
          "link": null,
          "likes": 20
        }
      ],
      "total": 886,
      "page": 0,
      "limit": 20,
      "offset": 0
    }
  ]
};

export default data;

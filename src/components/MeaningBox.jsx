import React from "react";

function MeaningBox() {
  const sample= [
    {
      definition:
        "A greeting (salutation) said when meeting someone or acknowledging someone’s arrival or presence.",
      synonyms: [],
      antonyms: [],
      example: "Hello, everyone.",
    },
    {
      definition: "A greeting used when answering the telephone.",
      synonyms: [],
      antonyms: [],
      example: "Hello? How may I help you?",
    },
    {
      definition:
        "A call for response if it is not clear if anyone is present or listening, or if a telephone conversation may have been disconnected.",
      synonyms: [],
      antonyms: [],
      example: "Hello? Is anyone there?",
    },
    {
      definition:
        "Used sarcastically to imply that the person addressed or referred to has done something the speaker or writer considers to be foolish.",
      synonyms: [],
      antonyms: [],
      example: "You just tried to start your car with your cell phone. Hello?",
    },
    {
      definition: "An expression of puzzlement or discovery.",
      synonyms: [],
      antonyms: [],
      example: "Hello! What’s going on here?",
    },
  ];
  return (
    <div className="mx-8">
      <div className="flex items-center">
        <h1 className="text-lg mr-10 my-4">noun</h1>
        <div className="h-[.5px] w-full bg-secondary"></div>
      </div>
      <p className="text-gray-400 bg-green">Meaning</p>
      <ul className="list-disc marker:text-primary pl-10">
        {sample.map((e,i)=> <li key={i} className="my-4">
            {
                e.definition
            }
        </li>)}
      </ul>
      <div className="flex">
        <h1 className="text-gray-400 mr-5">Synoyms</h1>
        <p className="text-primary"> Hii</p>
      </div>
      <div className="flex mt-4">
        <h1 className="text-gray-400 mr-5 ">Antonyms</h1>
        <p className="text-primary"> Hii</p>
      </div>
    </div>
  );
}

export default MeaningBox;

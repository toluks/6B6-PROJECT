import { GiCampCookingPot } from "react-icons/gi";

export default function SlugProcedure({process}) {

    const procedure = process.split('. ')
  return (
    <div className="py-8">
    <h2 className="text-green-700 text-2xl py-4">Procedure</h2>
    <ul>
        {procedure.map(cook => (
            <li className="flex gap-y-4">
                <GiCampCookingPot />
                <span>{cook}</span>
            </li>
        ))}
    </ul>
    </div>
  )
}

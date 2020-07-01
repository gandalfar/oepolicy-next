import React, { FunctionComponent } from "react";
import { countBy, toPairs, mergeWith, sortBy, fromPairs } from "lodash";
import { getCountryFromItem } from "../utils/charts";

const ListingPoliciesByType: FunctionComponent<{
  items: any[];
  services: any[];
}> = ({ items, services }) => {
  const servicesData = countBy(
    services.flatMap((item) => {
      return getCountryFromItem(item);
    })
  );
  delete servicesData.undefined;

  const data = countBy(
    items.flatMap((item) => {
      return getCountryFromItem(item);
    })
  );
  delete data.undefined;

  let list1 = fromPairs(
    toPairs(data).map((i) => {
      return [i[0], { policies: i[1] }];
    })
  );
  let list2 = fromPairs(
    toPairs(servicesData).map((i) => {
      return [i[0], { services: i[1] }];
    })
  );
  const mergedData = mergeWith(list1, list2);
  const sortedData = sortBy(toPairs(mergedData), (o) => {
    return o[0];
  });

  return (
    <div className="pt-30 container content">
      <h1 className="h2 mb-15">
        OE Policies and Repositories by countries/regions
      </h1>
      <div className="text-lg left mb-6 leading-none">
        <span className="inline-block w-6 h-6 bg-blue mr-3 -mb-1" />
        <span className="mr-8">Number of OE policies</span>
        <br />
        <span className="inline-block w-6 h-6 bg-orange mr-3 -mb-1" />
        Number of repositories, referatories and related services
      </div>

      <ul className="sortable-stats">
        {sortedData &&
          sortedData.map(([name, { policies, services }]) => (
            <StatsItem
              key={name}
              name={name}
              policies={policies}
              services={services}
            ></StatsItem>
          ))}
      </ul>
    </div>
  );
};

const StatsItem: FunctionComponent<{
  name: string;
  policies?: number;
  services?: number;
}> = ({ name, policies, services }) => (
  <li className="flex-inline items-center">
    <div className="flex">
      {policies ? (
        <span className="sortable-stats__number bg-blue">{policies}</span>
      ) : (
        <span className="sortable-stats__number" />
      )}
      {services ? (
        <span className="sortable-stats__number bg-orange">{services}</span>
      ) : (
        <span className="sortable-stats__number" />
      )}
      <span className="ml-4">{name}</span>
    </div>
  </li>
);

export default ListingPoliciesByType;
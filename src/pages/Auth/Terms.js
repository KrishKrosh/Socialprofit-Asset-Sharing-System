import React from "react";
import loadable from "@loadable/component";
import ContactContent from "../../content/ContactContent.json";

const Container = loadable(() => import("../../common/Container"));

const Terms = () => {
  return (
    <Container>
      <h2>Terms and Conditions</h2>
      Use of this website is for the purpose of connecting social profits in the
      Regional Municipality of Wood Buffalo (RMWB) with access to “Assets” that
      may be frequently sought or rented from a third party, for hosting events
      or fundraisers. The Social-profit Asset Sharing System (SASS) aims to
      enhance cost saving initiatives among social profits for more efficient
      use of funding in programs, as opposed to spending funding to enhance
      fundraising efforts.
      <br />
      <br />
      The following are definitions related to use of the SASS website and
      program:
      <br />
      <ul>
        <li>
          A “Social Profit” is any organization that meets all eligibility
          requirements to participate in the SASS website and program. <br />
          “Party A” is the lending organization.
        </li>
        <li>“Party B” is the borrowing organization.</li>
        <li>
          An “Asset” is any item listed on the website under “Party A” as
          something that can be lent to “Party B” for a specified period of
          time.
        </li>
        <li>
          “Organization Profile” refers to all information about the lending
          organization, including location, email address, contact number and
          available assets.
        </li>
        <ul>
          <li>
            All parties wishing to use the SASS website will be required to
            appoint a representative(s) from their organization as a point of
            contact.
          </li>
        </ul>
        <li>
          An “Asset Request” is made by “Party B” to “Party A” to borrow an
          asset listed on the SASS website.
        </li>
      </ul>
      <br />
      By using this website, you agree, on behalf of your organization, to the
      following terms and conditions:
      <br />
      <ul>
        <li>
          All social profits within the RMWB are eligible to participate in the
          SASS as long as the organization is registered as a social profit in
          the province of Alberta and/or with the Government of Canada.
        </li>
        <li>
          All social profits must have at least one designate to maintain the
          Organizational Profile on the SASS and be available to confirm asset
          requests and make arrangements with Party B for item pick up, drop off
          and availability.
        </li>
        <li>
          Asset requests will be received by “Party A” in the form of a calendar
          invite that can be accepted or declined. Each request is reviewed by
          “Party A” prior to acceptance, and requests are accepted based on item
          availability.
        </li>
        <li>
          All organizations must have at least one “Asset” to list on the SASS
          website to participate.
        </li>
        <ul>
          <li>
            Organizations with no assets, but wishing to participate in the
            SASS, will be required to volunteer 5 hours with an organization of
            their choice, through Wood Buffalo Volunteers, within 1 year of sign
            up for the SASS.
          </li>
        </ul>
        <li>
          There is to be no monetary exchange for any “Asset” lent by “Party A”
          to “Party B” with the exception of:
        </li>
        <ul>
          <li>
            Party B is responsible for any damages to an “Asset” in their
            possession, whether by Party B or a volunteer, staff member or an
            attendee of the fundraiser or event hosted by Party B.
          </li>
          <li>
            Any damage or loss of an Asset is to be replaced with the same
            product, or one agreed to by Party A, which is of equal or greater
            value than the original Asset. Party B is responsible for all
            replacement costs associated to the Asset.
          </li>
          <li>
            Any additional terms and conditions are to be agreed upon by both
            parties in advance of the exchange.
          </li>
          <li>
            Any discrepancies or disagreements about an Asset are to be settled
            directly between Part A and Party B. There will be no third-party
            mediation. Any discrepancies that are unresolved will result in both
            Party A and Party B being removed from access to the SASS website
            and program until such time that both parties come to a reasonable
            and amicable solution.
          </li>
        </ul>
        <li>
          Both Party A and Party B will have appropriate third-party liability
          insurance, if borrowing a physical location (such as a gymnasium), as
          an Asset. Failure to meet this requirement results in Party B taking
          full responsibility for any liability issues or incidents that may
          occur during their event or fundraiser.
        </li>
        <li>
          All arrangements for availability, pick up and drop off are to be made
          directly between Party A and Party B via the contact information
          provided upon request of an Asset on the SASS website. Assets should
          be returned within 48 hours of event conclusion, or next business day,
          whichever occurs first or if alternate arrangements are made between
          Party A and Party B.
        </li>
      </ul>
      The SASS website is to be used only following all terms and conditions
      listed above. Failure to comply with these terms and conditions may result
      in access to the SASS website being revoked. Misuse of the SASS website
      and program may also result in permanent removal from the SASS. The SASS
      program is not to be used for personal gain and benefit under any
      circumstances. This will result in immediate of removal and/or revocation
      from the SASS system.
      <br /> <br />
      By accepting these terms and conditions, I agree to abide by the terms of
      use for the Social-profit Asset Sharing System (SASS).
      <br /> <br />
    </Container>
  );
};

export default Terms;

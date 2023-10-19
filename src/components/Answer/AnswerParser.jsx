import { AskResponse, Citation } from "../../api/api";
import { cloneDeep } from "lodash-es";




export function parseAnswer(answer) {
    let answerText = answer.answer;
    const citationLinks = answerText.match(/\[(doc\d\d?\d?)]/g);

    const lengthDocN = "[doc".length;

    let filteredCitations = [] ;
    let citationReindex = 0;
    citationLinks?.forEach(link => {
        // Replacing the links/citations with number
        let citationIndex = link.slice(lengthDocN, link.length - 1);
        let citation = cloneDeep(answer.citations[Number(citationIndex) - 1]) ;
        if (!filteredCitations.find((c) => c.id === citationIndex)) {
          answerText = answerText.replaceAll(link, ` ^${++citationReindex}^ `);
          citation.id = citationIndex; // original doc index to de-dupe
          citation.reindex_id = citationReindex.toString(); // reindex from 1 for display
          filteredCitations.push(citation);
        }
    })


    return {
        citations: filteredCitations,
        markdownFormatText: answerText
    };
}

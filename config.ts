/*
 * $QZAT Website Config File
 */

// Main link (you must change on deploy with your domain name e.g. 'https://pekkycoin.com')
export const mainLink = "https://pekk-yweb-site.vercel.app";
export const telegramWebApp = `https://pekkycoinbot.t.me?startapp&utm_source=${mainLink}`; // Telegram bot's link

// Socials
export const instagramLink = `https://www.instagram.com/pekkytoken?utm_source=${mainLink}`; // Instagram
export const telegramLink = `https://pekkycoin.t.me?utm_source=${mainLink}`; // Telegram
export const twitterLink = `https://x.com/pekky_sol?utm_source=${mainLink}`; // Twitter

// Token Info
export const tokenCA = ""; // Token contract

// Page contents
export default {
  redLineText: "$QZAT To The Moon!", // Red bar's text in top of the page
  // Main route (/)
  homeMainSection: {
    title: "$QZAT to the Moon",
    description:
      "$QZAT is a funny cartoon duck mascot. Join the community now and dive into the meme magic!", // The \n component breaks lines if you want to add, you can.
    buttons: [
      {
        text: tokenCA ? "Buy now" : "Join now",
        href: tokenCA
          ? `https://jup.ag/SOL-${tokenCA}`
          : telegramLink,
      },
    ],
  },
  // Tokenomics route (/tokenomics)
  tokenomicsPage: {
    title: "TOKENOMICS",
    description: "$QZAT Tokenomics",
  },
  // Tokenomics route (/roadmap)
  roadmapPage: {
    title: "OUR ROADMAP",
    description: `This roadmap outlines our journey to exciting milestones, including listings on major exchanges. Let's pave the way for innovative developments.`,
    phases: [
      // Phase 1
      {
        items: [
          "Launch the telegram",
          "Publish the website",
          "Build a strong community",
        ],
      },
      // Phase 2
      {
        items: [
          "Launch on pump.fun",
          "Airdrop for early members",
          "Launch Pekky the Duck game",
        ],
      },
      // Phase 3
      {
        items: ["CoinGecko and CMC Listing", "Hire crypto influencers"],
      },
      // Phase 4
      {
        items: [
          "Establish DAO's for token's future",
          "Insure long-term sustainability",
        ],
      },
    ],
  },
};
//:end

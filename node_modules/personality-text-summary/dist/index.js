(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.TextSummary = f()}})(function(){var define,module,exports;return (function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
module.exports={
  "big5": {
    "Openness": {
      "HighDescription": "Intellectually curious, emotionally-aware, sensitive to beauty and willing to try new things.",
      "LowDescription": "Preferring the plain, straightforward, and obvious over the complex, ambiguous, and subtle."
    },
    "Conscientiousness": {
      "HighDescription": "More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.",
      "LowDescription": "More likely to prefer the spontaneous over the planned."
    },
    "Extraversion": {
      "HighDescription": "More energetic and pronounced engagement with the external world. Likes high group visibility, talking, and asserting themselves.",
      "LowDescription": "Needs less stimulation and are more independent of their social world. It does not mean they are shy, un-friendly, or antisocial."
    },
    "Agreeableness": {
      "HighDescription": "Value getting along with others. They have a more optimistic view of human nature.",
      "LowDescription": "Value self interests over others. They are more skeptical of others' motives."
    },
    "Neuroticism": {
      "HighDescription": "More likely to have negative emotions or get upset. It could mean they are going through a tough time.",
      "LowDescription": "More calm and less likely to get upset. It does not mean they are positive, or happy people."
    }
  },
  "facets": {
  	"Friendliness": {
  		"Big5": "Extraversion",
  		"LowTerm": "Reserved",
  		"HighTerm": "Outgoing",
  		"LowDescription": "You are a private person and don't let many people in",
  		"HighDescription": "You make friends easily and feel comfortable around other people"
  	},
  	"Gregariousness": {
  		"Big5": "Extraversion",
  		"LowTerm": "Independent",
  		"HighTerm": "Sociable",
  		"LowDescription": "You have a strong desire to have time to yourself",
  		"HighDescription": "You enjoy being in the company of others"
  	},
  	"Assertiveness": {
  		"Big5": "Extraversion",
  		"LowTerm": "Demure",
  		"HighTerm": "Assertive",
  		"LowDescription": "You prefer to listen than to talk, especially in group situations",
  		"HighDescription": "You tend to speak up and take charge of situations, and you are comfortable leading groups"
  	},
  	"Activity-level": {
  		"Big5": "Extraversion",
  		"LowTerm": "Laid-back",
  		"HighTerm": "Energetic",
  		"LowDescription": "You appreciate a relaxed pace in life",
  		"HighDescription": "You enjoy a fast-paced, busy schedule with many activities"
  	},
  	"Excitement-seeking": {
  		"Big5": "Extraversion",
  		"LowTerm": "Calm-seeking",
  		"HighTerm": "Excitement-seeking",
  		"LowDescription": "You prefer activities that are quiet, calm, and safe",
  		"HighDescription": "You are excited by taking risks and feel bored without lots of action going on"
  	},
  	"Cheerfulness": {
  		"Big5": "Extraversion",
  		"LowTerm": "Solemn",
  		"HighTerm": "Cheerful",
  		"LowDescription": "You are generally serious and do not joke much",
  		"HighDescription": "You are a joyful person and share that joy with the world"
  	},
  	"Trust": {
  		"Big5": "Agreeableness",
  		"LowTerm": "Cautious of others",
  		"HighTerm": "Trusting of others",
  		"LowDescription": "You are wary of other people's intentions and do not trust easily",
  		"HighDescription": "You believe the best in others and trust people easily"
  	},
  	"Cooperation": {
  		"Big5": "Agreeableness",
  		"LowTerm": "Contrary",
  		"HighTerm": "Accommodating",
  		"LowDescription": "You do not shy away from contradicting others",
  		"HighDescription": "You are easy to please and try to avoid confrontation"
  	},
  	"Altruism": {
  		"Big5": "Agreeableness",
  		"LowTerm": "Self-focused",
  		"HighTerm": "Altruistic",
  		"LowDescription": "You are more concerned with taking care of yourself than taking time for others",
  		"HighDescription": "You feel fulfilled when helping others, and will go out of your way to do so"
  	},
  	"Morality": {
  		"Big5": "Agreeableness",
  		"LowTerm": "Compromising",
  		"HighTerm": "Uncompromising",
  		"LowDescription": "You are comfortable using every trick in the book to get what you want",
  		"HighDescription": "You think it is wrong to take advantage of others to get ahead"
  	},
  	"Modesty": {
  		"Big5": "Agreeableness",
  		"LowTerm": "Proud",
  		"HighTerm": "Modest",
  		"LowDescription": "You hold yourself in high regard, satisfied with who you are",
  		"HighDescription": "You are uncomfortable being the center of attention"
  	},
  	"Sympathy": {
  		"Big5": "Agreeableness",
  		"LowTerm": "Hardened",
  		"HighTerm": "Empathetic",
  		"LowDescription": "You think that people should generally rely more on themselves than on other people",
  		"HighDescription": "You feel what others feel and are compassionate towards them"
  	},
  	"Self-efficacy": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "Self-doubting",
  		"HighTerm": "Self-assured",
  		"LowDescription": "You frequently doubt your ability to achieve your goals",
  		"HighDescription": "You feel you have the ability to succeed in the tasks you set out to do"
  	},
  	"Orderliness": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "Unstructured",
  		"HighTerm": "Organized",
  		"LowDescription": "You do not make a lot of time for organization in your daily life",
  		"HighDescription": "You feel a strong need for structure in your life"
  	},
  	"Dutifulness": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "Carefree",
  		"HighTerm": "Dutiful",
  		"LowDescription": "You do what you want, disregarding rules and obligations",
  		"HighDescription": "You take rules and obligations seriously, even when they're inconvenient"
  	},
  	"Achievement-striving": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "Content",
  		"HighTerm": "Driven",
  		"LowDescription": "You are content with your level of accomplishment and do not feel the need to set ambitious goals",
  		"HighDescription": "You have high goals for yourself and work hard to achieve them"
  	},
  	"Self-discipline": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "Intermittent",
  		"HighTerm": "Persistent",
  		"LowDescription": "You have a hard time sticking with difficult tasks for a long period of time",
  		"HighDescription": "You can tackle and stick with tough tasks"
  	},
  	"Cautiousness": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "Bold",
  		"HighTerm": "Deliberate",
  		"LowDescription": "You would rather take action immediately than spend time deliberating making a decision",
  		"HighDescription": "You carefully think through decisions before making them"
  	},
  	"Anxiety": {
  		"Big5": "Neuroticism",
  		"LowTerm": "Self-assured",
  		"HighTerm": "Prone to worry",
  		"LowDescription": "You tend to feel calm and self-assured",
  		"HighDescription": "You tend to worry about things that might happen"
  	},
  	"Anger": {
  		"Big5": "Neuroticism",
  		"LowTerm": "Mild-tempered",
  		"HighTerm": "Fiery",
  		"LowDescription": "It takes a lot to get you angry",
  		"HighDescription": "You have a fiery temper, especially when things do not go your way"
  	},
  	"Depression": {
  		"Big5": "Neuroticism",
  		"LowTerm": "Content",
  		"HighTerm": "Melancholy",
  		"LowDescription": "You are generally comfortable with yourself as you are",
  		"HighDescription": "You think quite often about the things you are unhappy about"
  	},
  	"Self-consciousness": {
  		"Big5": "Neuroticism",
  		"LowTerm": "Confident",
  		"HighTerm": "Self-conscious",
  		"LowDescription": "You are hard to embarrass and are self-confident most of the time",
  		"HighDescription": "You are sensitive about what others might be thinking about you"
  	},
  	"Immoderation": {
  		"Big5": "Neuroticism",
  		"LowTerm": "Self-controlled",
  		"HighTerm": "Hedonistic",
  		"LowDescription": "You have control over your desires, which are not particularly intense",
  		"HighDescription": "You feel your desires strongly and are easily tempted by them"
  	},
  	"Vulnerability": {
  		"Big5": "Neuroticism",
  		"LowTerm": "Calm under pressure",
  		"HighTerm": "Susceptible to stress",
  		"LowDescription": "You handle unexpected events calmly and effectively",
  		"HighDescription": "You are easily overwhelmed in stressful situations"
  	},
  	"Imagination": {
  		"Big5": "Openness",
  		"LowTerm": "Down-to-earth",
  		"HighTerm": "Imaginative",
  		"LowDescription": "You prefer facts over fantasy",
  		"HighDescription": "You have a wild imagination"
  	},
  	"Artistic-interests": {
  		"Big5": "Openness",
  		"LowTerm": "Unconcerned with art",
  		"HighTerm": "Appreciative of art",
  		"LowDescription": "You are less concerned with artistic or creative activities than most people who participated in our surveys",
  		"HighDescription": "You enjoy beauty and seek out creative experiences"
  	},
  	"Emotionality": {
  		"Big5": "Openness",
  		"LowTerm": "Dispassionate",
  		"HighTerm": "Emotionally aware",
  		"LowDescription": "You do not frequently think about or openly express your emotions",
  		"HighDescription": "You are aware of your feelings and how to express them"
  	},
  	"Adventurousness": {
  		"Big5": "Openness",
  		"LowTerm": "Consistent",
  		"HighTerm": "Adventurous",
  		"LowDescription": "You enjoy familiar routines and prefer not to deviate from them",
  		"HighDescription": "You are eager to experience new things"
  	},
  	"Intellect": {
  		"Big5": "Openness",
  		"LowTerm": "Concrete",
  		"HighTerm": "Philosophical",
  		"LowDescription": "You prefer dealing with the world as it is, rarely considering abstract ideas",
  		"HighDescription": "You are open to and intrigued by new ideas and love to explore them"
  	},
  	"Liberalism": {
  		"Big5": "Openness",
  		"LowTerm": "Respectful of authority",
  		"HighTerm": "Authority-challenging",
  		"LowDescription": "You prefer following with tradition in order to maintain a sense of stability",
  		"HighDescription": "You prefer to challenge authority and traditional values to help bring about positive changes"
  	}
  },
  "needs": {
      "Challenge": [
          "prestige",
          "competition",
          "glory"
      ],
      "Closeness": [
          "belongingness",
          "nostalgia",
          "intimacy"
      ],
      "Curiosity": [
          "discovery",
          "mastery",
          "gaining knowledge"
      ],
      "Excitement": [
          "revelry",
          "anticipation",
          "exhiliration"
      ],
      "Harmony": [
          "well-being",
          "courtesy",
          "politeness"
      ],
      "Ideal": [
          "sophistication",
          "spirituality",
          "superiority",
          "fulfillment"
      ],
      "Liberty": [
          "modernity",
          "expanding possibility",
          "escape",
          "spontaneity",
          "novelty"
      ],
      "Love": [
          "connectedness",
          "affinity"
      ],
      "Practicality": [
          "efficiency",
          "practicality",
          "high value",
          "convenience"
      ],
      "Self-expression": [
          "self-expression",
          "personal empowerment",
          "personal strength"
      ],
      "Stability": [
          "stability",
          "authenticity",
          "trustworthiness"
      ],
      "Structure": [
          "organization",
          "straightforwardness",
          "clarity",
          "reliability"
      ]
  },
  "phrases": {
    "You are %s": "You are %s",
    "You are %s and %s": "You are %s and %s",
    "You are %s, %s and %s": "You are %s, %s and %s",
    "And you are %s": "And you are %s",
    "You are relatively unconcerned with %s": "You are relatively unconcerned with %s",
    "You are relatively unconcerned with both %s and %s": "You are relatively unconcerned with both %s and %s",
    "You don't find %s to be particularly motivating for you": "You don't find %s to be particularly motivating for you",
    "You don't find either %s or %s to be particularly motivating for you": "You don't find either %s or %s to be particularly motivating for you",
    "You value both %s a bit": "You value both %s a bit",
    "You value both %s and %s a bit": "You value both %s and %s a bit",
    "You consider %s to guide a large part of what you do" : "You consider %s to guide a large part of what you do",
    "You consider both %s and %s to guide a large part of what you do" : "You consider both %s and %s to guide a large part of what you do",
    "And %s": "And %s",
    "You value %s a bit more": "You value %s a bit more",
    "Experiences that make you feel high %s are generally unappealing to you": "Experiences that make you feel high %s are generally unappealing to you",
    "Experiences that give a sense of %s hold some appeal to you": "Experiences that give a sense of %s hold some appeal to you",
    "You are motivated to seek out experiences that provide a strong feeling of %s": "You are motivated to seek out experiences that provide a strong feeling of %s",
    "Your choices are driven by a desire for %s" : "Your choices are driven by a desire for %s",
    "a bit %s": "a bit %s",
    "somewhat %s" : "somewhat %s",
    "can be perceived as %s": "can be perceived as %s"
  },
  "traits": {
      "Agreeableness_minus_Conscientiousness_minus": [
          {
              "perceived_negatively": true,
              "word": "inconsiderate"
          },
          {
              "perceived_negatively": true,
              "word": "impolite"
          },
          {
              "perceived_negatively": true,
              "word": "distrustful"
          },
          {
              "perceived_negatively": true,
              "word": "uncooperative"
          },
          {
              "perceived_negatively": true,
              "word": "thoughtless"
          }
      ],
      "Agreeableness_minus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "strict"
          },
          {
              "perceived_negatively": false,
              "word": "rigid"
          },
          {
              "perceived_negatively": true,
              "word": "stern"
          }
      ],
      "Agreeableness_minus_Extraversion_minus": [
          {
              "perceived_negatively": true,
              "word": "cynical"
          },
          {
              "perceived_negatively": true,
              "word": "wary of others"
          },
          {
              "perceived_negatively": true,
              "word": "seclusive"
          },
          {
              "perceived_negatively": true,
              "word": "detached"
          },
          {
              "perceived_negatively": true,
              "word": "impersonal"
          },
          {
              "perceived_negatively": true,
              "word": "glum"
          }
      ],
      "Agreeableness_minus_Extraversion_plus": [
          {
              "perceived_negatively": true,
              "word": "bullheaded"
          },
          {
              "perceived_negatively": true,
              "word": "abrupt"
          },
          {
              "perceived_negatively": true,
              "word": "crude"
          },
          {
              "perceived_negatively": true,
              "word": "combative"
          },
          {
              "perceived_negatively": true,
              "word": "rough"
          },
          {
              "perceived_negatively": false,
              "word": "sly"
          },
          {
              "perceived_negatively": true,
              "word": "manipulative"
          },
          {
              "perceived_negatively": true,
              "word": "gruff"
          },
          {
              "perceived_negatively": true,
              "word": "devious"
          }
      ],
      "Agreeableness_minus_Neuroticism_minus": [
          {
              "perceived_negatively": true,
              "word": "insensitive"
          },
          {
              "perceived_negatively": true,
              "word": "unaffectionate"
          },
          {
              "perceived_negatively": true,
              "word": "passionless"
          },
          {
              "perceived_negatively": true,
              "word": "unemotional"
          }
      ],
      "Agreeableness_minus_Neuroticism_plus": [
          {
              "perceived_negatively": true,
              "word": "critical"
          },
          {
              "perceived_negatively": true,
              "word": "selfish"
          },
          {
              "perceived_negatively": true,
              "word": "ill-tempered"
          },
          {
              "perceived_negatively": true,
              "word": "antagonistic"
          },
          {
              "perceived_negatively": true,
              "word": "grumpy"
          },
          {
              "perceived_negatively": true,
              "word": "bitter"
          },
          {
              "perceived_negatively": true,
              "word": "disagreeable"
          },
          {
              "perceived_negatively": true,
              "word": "demanding"
          }
      ],
      "Agreeableness_minus_Openness_minus": [
          {
              "perceived_negatively": true,
              "word": "coarse"
          },
          {
              "perceived_negatively": true,
              "word": "tactless"
          },
          {
              "perceived_negatively": true,
              "word": "curt"
          },
          {
              "perceived_negatively": true,
              "word": "narrow-minded"
          },
          {
              "perceived_negatively": true,
              "word": "callous"
          },
          {
              "perceived_negatively": true,
              "word": "ruthless"
          },
          {
              "perceived_negatively": true,
              "word": "uncharitable"
          },
          {
              "perceived_negatively": true,
              "word": "vindictive"
          }
      ],
      "Agreeableness_minus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "shrewd"
          },
          {
              "perceived_negatively": false,
              "word": "eccentric"
          },
          {
              "perceived_negatively": false,
              "word": "individualistic"
          }
      ],
      "Agreeableness_plus_Conscientiousness_minus": [
          {
              "perceived_negatively": false,
              "word": "unpretentious"
          },
          {
              "perceived_negatively": false,
              "word": "self-effacing"
          }
      ],
      "Agreeableness_plus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "helpful"
          },
          {
              "perceived_negatively": false,
              "word": "cooperative"
          },
          {
              "perceived_negatively": false,
              "word": "considerate"
          },
          {
              "perceived_negatively": false,
              "word": "respectful"
          },
          {
              "perceived_negatively": false,
              "word": "polite"
          },
          {
              "perceived_negatively": false,
              "word": "reasonable"
          },
          {
              "perceived_negatively": false,
              "word": "courteous"
          },
          {
              "perceived_negatively": false,
              "word": "thoughtful"
          },
          {
              "perceived_negatively": false,
              "word": "loyal"
          },
          {
              "perceived_negatively": false,
              "word": "moral"
          }
      ],
      "Agreeableness_plus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "soft-hearted"
          },
          {
              "perceived_negatively": false,
              "word": "agreeable"
          },
          {
              "perceived_negatively": false,
              "word": "obliging"
          },
          {
              "perceived_negatively": false,
              "word": "humble"
          },
          {
              "perceived_negatively": true,
              "word": "lenient"
          }
      ],
      "Agreeableness_plus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "effervescent"
          },
          {
              "perceived_negatively": false,
              "word": "happy"
          },
          {
              "perceived_negatively": false,
              "word": "friendly"
          },
          {
              "perceived_negatively": false,
              "word": "merry"
          },
          {
              "perceived_negatively": false,
              "word": "jovial"
          },
          {
              "perceived_negatively": false,
              "word": "humorous"
          }
      ],
      "Agreeableness_plus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "generous"
          },
          {
              "perceived_negatively": false,
              "word": "pleasant"
          },
          {
              "perceived_negatively": false,
              "word": "tolerant"
          },
          {
              "perceived_negatively": false,
              "word": "peaceful"
          },
          {
              "perceived_negatively": false,
              "word": "flexible"
          },
          {
              "perceived_negatively": false,
              "word": "easy-going"
          },
          {
              "perceived_negatively": false,
              "word": "fair"
          },
          {
              "perceived_negatively": false,
              "word": "charitable"
          },
          {
              "perceived_negatively": false,
              "word": "trustful"
          }
      ],
      "Agreeableness_plus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "sentimental"
          },
          {
              "perceived_negatively": false,
              "word": "affectionate"
          },
          {
              "perceived_negatively": false,
              "word": "sensitive"
          },
          {
              "perceived_negatively": false,
              "word": "soft"
          },
          {
              "perceived_negatively": false,
              "word": "passionate"
          },
          {
              "perceived_negatively": false,
              "word": "romantic"
          }
      ],
      "Agreeableness_plus_Openness_minus": [
          {
              "perceived_negatively": true,
              "word": "dependent"
          },
          {
              "perceived_negatively": true,
              "word": "simple"
          }
      ],
      "Agreeableness_plus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "genial"
          },
          {
              "perceived_negatively": false,
              "word": "tactful"
          },
          {
              "perceived_negatively": false,
              "word": "diplomatic"
          },
          {
              "perceived_negatively": false,
              "word": "deep"
          },
          {
              "perceived_negatively": false,
              "word": "idealistic"
          }
      ],
      "Conscientiousness_minus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "rash"
          },
          {
              "perceived_negatively": true,
              "word": "uncooperative"
          },
          {
              "perceived_negatively": true,
              "word": "unreliable"
          },
          {
              "perceived_negatively": true,
              "word": "distrustful"
          },
          {
              "perceived_negatively": true,
              "word": "thoughtless"
          }
      ],
      "Conscientiousness_minus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "unpretentious"
          },
          {
              "perceived_negatively": false,
              "word": "self-effacing"
          }
      ],
      "Conscientiousness_minus_Extraversion_minus": [
          {
              "perceived_negatively": true,
              "word": "indecisive"
          },
          {
              "perceived_negatively": true,
              "word": "aimless"
          },
          {
              "perceived_negatively": false,
              "word": "wishy-washy"
          },
          {
              "perceived_negatively": false,
              "word": "noncommittal"
          },
          {
              "perceived_negatively": true,
              "word": "unambitious"
          }
      ],
      "Conscientiousness_minus_Extraversion_plus": [
          {
              "perceived_negatively": true,
              "word": "unruly"
          },
          {
              "perceived_negatively": false,
              "word": "boisterous"
          },
          {
              "perceived_negatively": true,
              "word": "reckless"
          },
          {
              "perceived_negatively": true,
              "word": "devil-may-care"
          },
          {
              "perceived_negatively": false,
              "word": "demonstrative"
          }
      ],
      "Conscientiousness_minus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "informal"
          },
          {
              "perceived_negatively": false,
              "word": "low-key"
          }
      ],
      "Conscientiousness_minus_Neuroticism_plus": [
          {
              "perceived_negatively": true,
              "word": "scatterbrained"
          },
          {
              "perceived_negatively": true,
              "word": "inconsistent"
          },
          {
              "perceived_negatively": true,
              "word": "erratic"
          },
          {
              "perceived_negatively": true,
              "word": "forgetful"
          },
          {
              "perceived_negatively": true,
              "word": "impulsive"
          },
          {
              "perceived_negatively": true,
              "word": "frivolous"
          }
      ],
      "Conscientiousness_minus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "foolhardy"
          },
          {
              "perceived_negatively": true,
              "word": "illogical"
          },
          {
              "perceived_negatively": true,
              "word": "immature"
          },
          {
              "perceived_negatively": true,
              "word": "haphazard"
          },
          {
              "perceived_negatively": false,
              "word": "lax"
          },
          {
              "perceived_negatively": true,
              "word": "flippant"
          }
      ],
      "Conscientiousness_minus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "unconventional"
          },
          {
              "perceived_negatively": false,
              "word": "quirky"
          }
      ],
      "Conscientiousness_plus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "stern"
          },
          {
              "perceived_negatively": false,
              "word": "strict"
          },
          {
              "perceived_negatively": false,
              "word": "rigid"
          }
      ],
      "Conscientiousness_plus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "dependable"
          },
          {
              "perceived_negatively": false,
              "word": "responsible"
          },
          {
              "perceived_negatively": false,
              "word": "reliable"
          },
          {
              "perceived_negatively": false,
              "word": "mannerly"
          },
          {
              "perceived_negatively": false,
              "word": "considerate"
          }
      ],
      "Conscientiousness_plus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "cautious"
          },
          {
              "perceived_negatively": false,
              "word": "confident"
          },
          {
              "perceived_negatively": false,
              "word": "punctual"
          },
          {
              "perceived_negatively": false,
              "word": "formal"
          },
          {
              "perceived_negatively": false,
              "word": "thrifty"
          },
          {
              "perceived_negatively": false,
              "word": "principled"
          }
      ],
      "Conscientiousness_plus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "ambitious"
          },
          {
              "perceived_negatively": false,
              "word": "alert"
          },
          {
              "perceived_negatively": false,
              "word": "firm"
          },
          {
              "perceived_negatively": false,
              "word": "purposeful"
          },
          {
              "perceived_negatively": false,
              "word": "competitive"
          }
      ],
      "Conscientiousness_plus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "thorough"
          },
          {
              "perceived_negatively": false,
              "word": "steady"
          },
          {
              "perceived_negatively": false,
              "word": "consistent"
          },
          {
              "perceived_negatively": false,
              "word": "self-disciplined"
          },
          {
              "perceived_negatively": false,
              "word": "logical"
          },
          {
              "perceived_negatively": false,
              "word": "decisive"
          },
          {
              "perceived_negatively": false,
              "word": "controlled"
          },
          {
              "perceived_negatively": false,
              "word": "concise"
          }
      ],
      "Conscientiousness_plus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "particular"
          },
          {
              "perceived_negatively": true,
              "word": "high-strung"
          }
      ],
      "Conscientiousness_plus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "traditional"
          },
          {
              "perceived_negatively": false,
              "word": "conventional"
          }
      ],
      "Conscientiousness_plus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "sophisticated"
          },
          {
              "perceived_negatively": false,
              "word": "perfectionistic"
          },
          {
              "perceived_negatively": false,
              "word": "industrious"
          },
          {
              "perceived_negatively": false,
              "word": "dignified"
          },
          {
              "perceived_negatively": false,
              "word": "refined"
          },
          {
              "perceived_negatively": false,
              "word": "cultured"
          },
          {
              "perceived_negatively": false,
              "word": "foresighted"
          }
      ],
      "Extraversion_minus_Agreeableness_minus": [
          {
              "perceived_negatively": false,
              "word": "skeptical"
          },
          {
              "perceived_negatively": false,
              "word": "wary of others"
          },
          {
              "perceived_negatively": true,
              "word": "seclusive"
          },
          {
              "perceived_negatively": true,
              "word": "uncommunicative"
          },
          {
              "perceived_negatively": true,
              "word": "unsociable"
          },
          {
              "perceived_negatively": true,
              "word": "glum"
          },
          {
              "perceived_negatively": true,
              "word": "detached"
          },
          {
              "perceived_negatively": false,
              "word": "aloof"
          }
      ],
      "Extraversion_minus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "unaggressive"
          },
          {
              "perceived_negatively": false,
              "word": "humble"
          },
          {
              "perceived_negatively": false,
              "word": "submissive"
          },
          {
              "perceived_negatively": false,
              "word": "timid"
          },
          {
              "perceived_negatively": false,
              "word": "compliant"
          },
          {
              "perceived_negatively": false,
              "word": "naïve"
          }
      ],
      "Extraversion_minus_Conscientiousness_minus": [
          {
              "perceived_negatively": true,
              "word": "indirect"
          },
          {
              "perceived_negatively": true,
              "word": "unenergetic"
          },
          {
              "perceived_negatively": true,
              "word": "sluggish"
          },
          {
              "perceived_negatively": true,
              "word": "nonpersistent"
          },
          {
              "perceived_negatively": true,
              "word": "vague"
          }
      ],
      "Extraversion_minus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "restrained"
          },
          {
              "perceived_negatively": false,
              "word": "serious"
          },
          {
              "perceived_negatively": false,
              "word": "discreet"
          },
          {
              "perceived_negatively": false,
              "word": "cautious"
          },
          {
              "perceived_negatively": false,
              "word": "principled"
          }
      ],
      "Extraversion_minus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "tranquil"
          },
          {
              "perceived_negatively": false,
              "word": "sedate"
          },
          {
              "perceived_negatively": false,
              "word": "placid"
          },
          {
              "perceived_negatively": false,
              "word": "impartial"
          },
          {
              "perceived_negatively": false,
              "word": "unassuming"
          },
          {
              "perceived_negatively": false,
              "word": "acquiescent"
          }
      ],
      "Extraversion_minus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "guarded"
          },
          {
              "perceived_negatively": false,
              "word": "pessimistic"
          },
          {
              "perceived_negatively": false,
              "word": "secretive"
          },
          {
              "perceived_negatively": true,
              "word": "cowardly"
          },
          {
              "perceived_negatively": false,
              "word": "secretive"
          }
      ],
      "Extraversion_minus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "somber"
          },
          {
              "perceived_negatively": true,
              "word": "meek"
          },
          {
              "perceived_negatively": true,
              "word": "unadventurous"
          },
          {
              "perceived_negatively": false,
              "word": "passive"
          },
          {
              "perceived_negatively": true,
              "word": "apathetic"
          },
          {
              "perceived_negatively": false,
              "word": "docile"
          }
      ],
      "Extraversion_minus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "inner-directed"
          },
          {
              "perceived_negatively": false,
              "word": "introspective"
          },
          {
              "perceived_negatively": false,
              "word": "meditative"
          },
          {
              "perceived_negatively": false,
              "word": "contemplating"
          },
          {
              "perceived_negatively": false,
              "word": "self-examining"
          }
      ],
      "Extraversion_plus_Agreeableness_minus": [
          {
              "perceived_negatively": false,
              "word": "opinionated"
          },
          {
              "perceived_negatively": true,
              "word": "forceful"
          },
          {
              "perceived_negatively": true,
              "word": "domineering"
          },
          {
              "perceived_negatively": true,
              "word": "boastful"
          },
          {
              "perceived_negatively": true,
              "word": "bossy"
          },
          {
              "perceived_negatively": false,
              "word": "dominant"
          },
          {
              "perceived_negatively": false,
              "word": "cunning"
          }
      ],
      "Extraversion_plus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "social"
          },
          {
              "perceived_negatively": false,
              "word": "energetic"
          },
          {
              "perceived_negatively": false,
              "word": "enthusiastic"
          },
          {
              "perceived_negatively": false,
              "word": "communicative"
          },
          {
              "perceived_negatively": false,
              "word": "vibrant"
          },
          {
              "perceived_negatively": false,
              "word": "spirited"
          },
          {
              "perceived_negatively": false,
              "word": "magnetic"
          },
          {
              "perceived_negatively": false,
              "word": "zestful"
          }
      ],
      "Extraversion_plus_Conscientiousness_minus": [
          {
              "perceived_negatively": false,
              "word": "boisterous"
          },
          {
              "perceived_negatively": false,
              "word": "mischievous"
          },
          {
              "perceived_negatively": false,
              "word": "exhibitionistic"
          },
          {
              "perceived_negatively": false,
              "word": "gregarious"
          },
          {
              "perceived_negatively": false,
              "word": "demonstrative"
          }
      ],
      "Extraversion_plus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "active"
          },
          {
              "perceived_negatively": false,
              "word": "competitive"
          },
          {
              "perceived_negatively": false,
              "word": "persistent"
          },
          {
              "perceived_negatively": false,
              "word": "ambitious"
          },
          {
              "perceived_negatively": false,
              "word": "purposeful"
          }
      ],
      "Extraversion_plus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "confident"
          },
          {
              "perceived_negatively": false,
              "word": "bold"
          },
          {
              "perceived_negatively": false,
              "word": "assured"
          },
          {
              "perceived_negatively": false,
              "word": "uninhibited"
          },
          {
              "perceived_negatively": false,
              "word": "courageous"
          },
          {
              "perceived_negatively": false,
              "word": "brave"
          },
          {
              "perceived_negatively": false,
              "word": "self-satisfied"
          },
          {
              "perceived_negatively": false,
              "word": "vigorous"
          },
          {
              "perceived_negatively": false,
              "word": "strong"
          }
      ],
      "Extraversion_plus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "explosive"
          },
          {
              "perceived_negatively": true,
              "word": "wordy"
          },
          {
              "perceived_negatively": false,
              "word": "extravagant"
          },
          {
              "perceived_negatively": true,
              "word": "volatile"
          },
          {
              "perceived_negatively": false,
              "word": "flirtatious"
          }
      ],
      "Extraversion_plus_Openness_minus": [
          {
              "perceived_negatively": true,
              "word": "verbose"
          },
          {
              "perceived_negatively": true,
              "word": "unscrupulous"
          },
          {
              "perceived_negatively": true,
              "word": "pompous"
          }
      ],
      "Extraversion_plus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "expressive"
          },
          {
              "perceived_negatively": false,
              "word": "candid"
          },
          {
              "perceived_negatively": false,
              "word": "dramatic"
          },
          {
              "perceived_negatively": false,
              "word": "spontaneous"
          },
          {
              "perceived_negatively": false,
              "word": "witty"
          },
          {
              "perceived_negatively": false,
              "word": "opportunistic"
          },
          {
              "perceived_negatively": false,
              "word": "independent"
          }
      ],
      "Neuroticism_minus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "unemotional"
          },
          {
              "perceived_negatively": true,
              "word": "insensitive"
          },
          {
              "perceived_negatively": true,
              "word": "unaffectionate"
          },
          {
              "perceived_negatively": true,
              "word": "passionless"
          }
      ],
      "Neuroticism_minus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "patient"
          },
          {
              "perceived_negatively": false,
              "word": "relaxed"
          },
          {
              "perceived_negatively": false,
              "word": "undemanding"
          },
          {
              "perceived_negatively": false,
              "word": "down-to-earth"
          },
          {
              "perceived_negatively": false,
              "word": "optimistic"
          },
          {
              "perceived_negatively": false,
              "word": "conceitless"
          },
          {
              "perceived_negatively": false,
              "word": "uncritical"
          },
          {
              "perceived_negatively": false,
              "word": "unpretentious"
          }
      ],
      "Neuroticism_minus_Conscientiousness_minus": [
          {
              "perceived_negatively": false,
              "word": "informal"
          },
          {
              "perceived_negatively": false,
              "word": "low-key"
          }
      ],
      "Neuroticism_minus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "rational"
          },
          {
              "perceived_negatively": false,
              "word": "objective"
          },
          {
              "perceived_negatively": false,
              "word": "steady"
          },
          {
              "perceived_negatively": false,
              "word": "logical"
          },
          {
              "perceived_negatively": false,
              "word": "decisive"
          },
          {
              "perceived_negatively": false,
              "word": "poised"
          },
          {
              "perceived_negatively": false,
              "word": "concise"
          },
          {
              "perceived_negatively": false,
              "word": "thorough"
          },
          {
              "perceived_negatively": false,
              "word": "economical"
          },
          {
              "perceived_negatively": false,
              "word": "self-disciplined"
          }
      ],
      "Neuroticism_minus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "unassuming"
          },
          {
              "perceived_negatively": true,
              "word": "unexcitable"
          },
          {
              "perceived_negatively": false,
              "word": "placid"
          },
          {
              "perceived_negatively": false,
              "word": "tranquil"
          }
      ],
      "Neuroticism_minus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "unselfconscious"
          },
          {
              "perceived_negatively": false,
              "word": "weariless"
          },
          {
              "perceived_negatively": false,
              "word": "indefatigable"
          }
      ],
      "Neuroticism_minus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "imperturbable"
          },
          {
              "perceived_negatively": true,
              "word": "insensitive"
          }
      ],
      "Neuroticism_minus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "heartfelt"
          },
          {
              "perceived_negatively": false,
              "word": "versatile"
          },
          {
              "perceived_negatively": false,
              "word": "creative"
          },
          {
              "perceived_negatively": false,
              "word": "intellectual"
          },
          {
              "perceived_negatively": false,
              "word": "insightful"
          }
      ],
      "Neuroticism_plus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "temperamental"
          },
          {
              "perceived_negatively": true,
              "word": "irritable"
          },
          {
              "perceived_negatively": true,
              "word": "quarrelsome"
          },
          {
              "perceived_negatively": true,
              "word": "impatient"
          },
          {
              "perceived_negatively": true,
              "word": "grumpy"
          },
          {
              "perceived_negatively": true,
              "word": "crabby"
          },
          {
              "perceived_negatively": true,
              "word": "cranky"
          }
      ],
      "Neuroticism_plus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "emotional"
          },
          {
              "perceived_negatively": true,
              "word": "gullible"
          },
          {
              "perceived_negatively": false,
              "word": "affectionate"
          },
          {
              "perceived_negatively": false,
              "word": "sensitive"
          },
          {
              "perceived_negatively": false,
              "word": "soft"
          }
      ],
      "Neuroticism_plus_Conscientiousness_minus": [
          {
              "perceived_negatively": true,
              "word": "compulsive"
          },
          {
              "perceived_negatively": true,
              "word": "nosey"
          },
          {
              "perceived_negatively": true,
              "word": "self-indulgent"
          },
          {
              "perceived_negatively": true,
              "word": "forgetful"
          },
          {
              "perceived_negatively": true,
              "word": "impulsive"
          }
      ],
      "Neuroticism_plus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "particular"
          },
          {
              "perceived_negatively": true,
              "word": "high-strung"
          }
      ],
      "Neuroticism_plus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "guarded"
          },
          {
              "perceived_negatively": true,
              "word": "fretful"
          },
          {
              "perceived_negatively": true,
              "word": "insecure"
          },
          {
              "perceived_negatively": true,
              "word": "pessimistic"
          },
          {
              "perceived_negatively": false,
              "word": "secretive"
          },
          {
              "perceived_negatively": true,
              "word": "fearful"
          },
          {
              "perceived_negatively": true,
              "word": "negativistic"
          },
          {
              "perceived_negatively": false,
              "word": "self-critical"
          }
      ],
      "Neuroticism_plus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "excitable"
          },
          {
              "perceived_negatively": true,
              "word": "wordy"
          },
          {
              "perceived_negatively": false,
              "word": "flirtatious"
          },
          {
              "perceived_negatively": true,
              "word": "explosive"
          },
          {
              "perceived_negatively": false,
              "word": "extravagant"
          },
          {
              "perceived_negatively": true,
              "word": "volatile"
          }
      ],
      "Neuroticism_plus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "easily rattled"
          },
          {
              "perceived_negatively": false,
              "word": "easily irked"
          },
          {
              "perceived_negatively": false,
              "word": "apprehensive"
          }
      ],
      "Neuroticism_plus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "excitable"
          },
          {
              "perceived_negatively": false,
              "word": "passionate"
          },
          {
              "perceived_negatively": false,
              "word": "sensual"
          }
      ],
      "Openness_minus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "coarse"
          },
          {
              "perceived_negatively": true,
              "word": "tactless"
          },
          {
              "perceived_negatively": true,
              "word": "curt"
          },
          {
              "perceived_negatively": true,
              "word": "narrow-minded"
          },
          {
              "perceived_negatively": true,
              "word": "callous"
          }
      ],
      "Openness_minus_Agreeableness_plus": [
          {
              "perceived_negatively": true,
              "word": "simple"
          },
          {
              "perceived_negatively": true,
              "word": "dependent"
          }
      ],
      "Openness_minus_Conscientiousness_minus": [
          {
              "perceived_negatively": true,
              "word": "shortsighted"
          },
          {
              "perceived_negatively": false,
              "word": "foolhardy"
          },
          {
              "perceived_negatively": true,
              "word": "illogical"
          },
          {
              "perceived_negatively": true,
              "word": "immature"
          },
          {
              "perceived_negatively": true,
              "word": "haphazard"
          },
          {
              "perceived_negatively": false,
              "word": "lax"
          },
          {
              "perceived_negatively": true,
              "word": "flippant"
          }
      ],
      "Openness_minus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "conventional"
          },
          {
              "perceived_negatively": false,
              "word": "traditional"
          }
      ],
      "Openness_minus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "predictable"
          },
          {
              "perceived_negatively": true,
              "word": "unimaginative"
          },
          {
              "perceived_negatively": false,
              "word": "somber"
          },
          {
              "perceived_negatively": true,
              "word": "apathetic"
          },
          {
              "perceived_negatively": true,
              "word": "unadventurous"
          }
      ],
      "Openness_minus_Extraversion_plus": [
          {
              "perceived_negatively": true,
              "word": "verbose"
          },
          {
              "perceived_negatively": true,
              "word": "unscrupulous"
          },
          {
              "perceived_negatively": true,
              "word": "pompous"
          }
      ],
      "Openness_minus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "imperturbable"
          },
          {
              "perceived_negatively": true,
              "word": "insensitive"
          }
      ],
      "Openness_minus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "easily rattled"
          },
          {
              "perceived_negatively": false,
              "word": "easily irked"
          },
          {
              "perceived_negatively": false,
              "word": "apprehensive"
          }
      ],
      "Openness_plus_Agreeableness_minus": [
          {
              "perceived_negatively": false,
              "word": "shrewd"
          },
          {
              "perceived_negatively": false,
              "word": "eccentric"
          },
          {
              "perceived_negatively": false,
              "word": "individualistic"
          }
      ],
      "Openness_plus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "idealistic"
          },
          {
              "perceived_negatively": false,
              "word": "diplomatic"
          },
          {
              "perceived_negatively": false,
              "word": "deep"
          },
          {
              "perceived_negatively": false,
              "word": "tactful"
          },
          {
              "perceived_negatively": false,
              "word": "genial"
          }
      ],
      "Openness_plus_Conscientiousness_minus": [
          {
              "perceived_negatively": false,
              "word": "unconventional"
          },
          {
              "perceived_negatively": false,
              "word": "quirky"
          }
      ],
      "Openness_plus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "analytical"
          },
          {
              "perceived_negatively": false,
              "word": "perceptive"
          },
          {
              "perceived_negatively": false,
              "word": "informative"
          },
          {
              "perceived_negatively": false,
              "word": "articulate"
          },
          {
              "perceived_negatively": false,
              "word": "dignified"
          },
          {
              "perceived_negatively": false,
              "word": "cultured"
          }
      ],
      "Openness_plus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "introspective"
          },
          {
              "perceived_negatively": false,
              "word": "meditative"
          },
          {
              "perceived_negatively": false,
              "word": "contemplating"
          },
          {
              "perceived_negatively": false,
              "word": "self-examining"
          },
          {
              "perceived_negatively": false,
              "word": "inner-directed"
          }
      ],
      "Openness_plus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "worldly"
          },
          {
              "perceived_negatively": false,
              "word": "theatrical"
          },
          {
              "perceived_negatively": false,
              "word": "eloquent"
          },
          {
              "perceived_negatively": false,
              "word": "inquisitive"
          },
          {
              "perceived_negatively": false,
              "word": "intense"
          }
      ],
      "Openness_plus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "creative"
          },
          {
              "perceived_negatively": false,
              "word": "intellectual"
          },
          {
              "perceived_negatively": false,
              "word": "insightful"
          },
          {
              "perceived_negatively": false,
              "word": "versatile"
          },
          {
              "perceived_negatively": false,
              "word": "inventive"
          }
      ],
      "Openness_plus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "passionate"
          },
          {
              "perceived_negatively": false,
              "word": "excitable"
          },
          {
              "perceived_negatively": false,
              "word": "sensual"
          }
      ]
  },
  "values": {
      "Hedonism": [
          {
              "Term": "Taking pleasure in life",
              "LowDescription": "You prefer activities with a purpose greater than just personal enjoyment",
              "HighDescription": "You are highly motivated to enjoy life to its fullest"
          }
      ],
      "Self-transcendence": [
          {
              "Term": "Helping others",
              "LowDescription": "You think people can handle their own business without interference",
              "HighDescription": "You think it is important to take care of the people around you"
          },
          {
              "Term": "Fairness",
              "LowDescription": "You believe that people create their own opportunities",
              "HighDescription": "You believe in social justice and equality for all"
          },
          {
              "Term": "Social justice",
              "LowDescription": "You believe that people create their own opportunities",
              "HighDescription": "You believe in social justice and equality for all"
          },
          {
              "Term": "Equality",
              "LowDescription": "You believe that people create their own opportunities",
              "HighDescription": "You believe in social justice and equality for all"
          },
          {
              "Term": "Community service",
              "LowDescription": "You think people can handle their own business without interference",
              "HighDescription": "You think it is important to take care of the people around you"
          }
      ],
      "Conservation": [
          {
              "Term": "Tradition",
              "LowDescription": "You care more about making your own path than following what others have done",
              "HighDescription": "You highly respect the groups you belong to and follow their guidance"
          },
          {
              "Term": "Harmony",
              "LowDescription": "You decide what is right based on your beliefs, not what other people think",
              "HighDescription": "You know rules are there for a reason, and you try never to break them"
          },
          {
              "Term": "Humility",
              "LowDescription": "You decide what is right based on your beliefs, not what other people think",
              "HighDescription": "You see worth in deferring to others"
          },
          {
              "Term": "Social norms",
              "LowDescription": "You decide what is right based on your beliefs, not what other people think",
              "HighDescription": "You know rules are there for a reason, and you try never to break them"
          },
          {
              "Term": "Security",
              "LowDescription": "You believe that security is worth sacrificing to achieve other goals",
              "HighDescription": "You believe that safety and security are important things to safeguard"
          },
          {
              "Term": "Safety",
              "LowDescription": "You believe that safety is worth sacrificing to achieve other goals",
              "HighDescription": "You believe that safety and security are important things to safeguard"
          }
      ],
      "Openness-to-change": [
          {
              "Term": "Independence",
              "LowDescription": "You welcome when others direct your activities for you",
              "HighDescription": "You like to set your own goals to decide how to best achieve them"
          },
          {
              "Term": "Excitement",
              "LowDescription": "You would rather stick with things you already know you like than risk trying something new and risky",
              "HighDescription": "You are eager to search out new and exciting experiences"
          },
          {
              "Term": "Creativity",
              "LowDescription": "You would rather stick with things you already know you like than risk trying something new and risky",
              "HighDescription": "You are eager to search out new and exciting experiences"
          },
          {
              "Term": "Curiosity",
              "LowDescription": "You would rather stick with things you already know you like than risk trying something new and risky",
              "HighDescription": "You are eager to search out new and exciting experiences"
          },
          {
              "Term": "Self-direction",
              "LowDescription": "You welcome when others direct your activities for you",
              "HighDescription": "You like to set your own goals to decide how to best achieve them"
          },
          {
              "Term": "Freedom",
              "LowDescription": "You welcome when others direct your activities for you",
              "HighDescription": "You like to set your own goals to decide how to best achieve them"
          }
      ],
      "Self-enhancement": [
          {
              "Term": "Achieving success",
              "LowDescription": "You make decisions with little regard for how they show off your talents",
              "HighDescription": "You seek out opportunities to improve yourself and demonstrate that you are a capable person"
          },
          {
              "Term": "Gaining social status",
              "LowDescription": "You are comfortable with your social status and don't feel a strong need to improve it",
              "HighDescription": "You put substantial effort into improving your status and public image"
          },
          {
              "Term": "Ambition",
              "LowDescription": "You are comfortable with your social status and don't feel a strong need to improve it",
              "HighDescription": "You feel it is important to push forward towards goals"
          },
          {
              "Term": "High achievement",
              "LowDescription": "You make decisions with little regard for how they show off your talents",
              "HighDescription": "You seek out opportunities to improve yourself and demonstrate that you are a capable person"
          }
      ]
  }
}

},{}],2:[function(require,module,exports){
module.exports={
  "big5": {
    "Openness": {
      "HighDescription": "Intelectualmente curiosos, emocionalmente conscientes, sensibles a la belleza, y deseosos por probar cosas nuevas.",
      "LowDescription": "Prefieren lo común, directo, y obvio, frente a lo complicado, ambiguo y sutil."
    },
    "Conscientiousness": {
      "HighDescription": "Auto-disciplinados, conscientes de sus deberes, o tendientes a querer alcanzar logros por encima de las medidas o expectativas externas.",
      "LowDescription": "Más propensos a preferir lo espontáneo por sobre lo planificado."
    },
    "Extraversion": {
      "HighDescription": "Más enérgico y marcado compromiso con el mundo externo. Les gusta la alta visibilidad en grupos, hablar y demostrarse a si mismos.",
      "LowDescription": "Necesitan menos estimulación y son más independientes de su mundo social. No significa que sean tímidos, no amistosos, o antisociales."
    },
    "Agreeableness": {
      "HighDescription": "Valoran llevarse bien con otros. Tienen una visión más optimista de la naturaleza humana.",
      "LowDescription": "Valoran sus propios intereses por sobre los de otros. Son más escépticos de los motivos de los demás."
    },
    "Neuroticism": {
      "HighDescription": "Más promensos a tener emociones negativas o disgustarse. Puede significar que estén pasando por un mañ momento.",
      "LowDescription": "Más calmos y menos probables a disgustarse o alterarse. Esto no significa que sean gente positiva o feliz."
    }
  },
  "facets": {
    "Anger": {
      "LowTerm": "Apacible",
      "HighDescription": "Tiene un temperamento fuerte, especialmente cuando las cosas no funcionan como espera",
      "HighTerm": "Intenso",
      "LowDescription": "Es difícil hacerle enojar",
      "Big5": "Neuroticism"
    },
    "Trust": {
      "LowTerm": "Cuidadoso con los demás",
      "HighDescription": "Cree lo mejor de los demás y confía fácilmente en las personas",
      "HighTerm": "Una persona que confía en los demás",
      "LowDescription": "Se cuida de las intenciones de los demás y no confía fácilmente",
      "Big5": "Agreeableness"
    },
    "Liberalism": {
      "LowTerm": "Respetuoso de la autoridad",
      "HighDescription": "Prefiere desafiar a la autoridad y  a los valores tradicionales para lograr cambios positivos",
      "HighTerm": "Desafiante ante la autoridad",
      "LowDescription": "Prefiere seguir tradiciones para mantener una sensación de estabilidad",
      "Big5": "Openness"
    },
    "Emotionality": {
      "LowTerm": "Desapasionado",
      "HighDescription": "Es consciente de sus sentimientos y de cómo expresarlos",
      "HighTerm": "Emocionalmente consciente",
      "LowDescription": "No piensa frecuentemente acerca de sus emociones ni las expresa abiertamente",
      "Big5": "Openness"
    },
    "Orderliness": {
      "LowTerm": "Desestructurado",
      "HighDescription": "Siente una fuerte necesidad de mantener una vida estructurada",
      "HighTerm": "Organizado",
      "LowDescription": "No le dedica mucho tiempo a organizarse en su vida diaria",
      "Big5": "Conscientiousness"
    },
    "Cheerfulness": {
      "LowTerm": "Solemne",
      "HighDescription": "Es una persona alegre y comparte esa alegría con el mundo",
      "HighTerm": "Alegre",
      "LowDescription": "Generalmente es serio y no hace muchas bromas",
      "Big5": "Extraversion"
    },
    "Cautiousness": {
      "LowTerm": "Audaz",
      "HighDescription": "Piensa cuidadosamente acerca de sus decisiones antes de tomarlas",
      "HighTerm": "Prudente",
      "LowDescription": "Prefiere tomar acción inmediatamente antes que invertir tiempo deliberando qué decisión tomar",
      "Big5": "Conscientiousness"
    },
    "Modesty": {
      "LowTerm": "Orgulloso",
      "HighDescription": "Se siente cómodo siendo el centro de atención",
      "HighTerm": "Modesto",
      "LowDescription": "Se tiene una estima alta, se encuentra satisfecho con quién es",
      "Big5": "Agreeableness"
    },
    "Cooperation": {
      "LowTerm": "Contrario",
      "HighDescription": "Es fácil de complacer e intenta evitar posibles confrontaciones",
      "HighTerm": "Acomodaticio",
      "LowDescription": "No te importa contradecir a los demás",
      "Big5": "Agreeableness"
    },
    "Excitement-seeking": {
      "LowTerm": "Una persona que busca la calma",
      "HighDescription": "Le emociona tomar riesgos y se aburre si no se ve envuelto en mucha acción",
      "HighTerm": "Una persona que busca la emoción",
      "LowDescription": "Prefiere las actividades tranquilas, pacíficas y seguras",
      "Big5": "Extraversion"
    },
    "Assertiveness": {
      "LowTerm": "Callado",
      "HighDescription": "Tiende a expresarse y a hacerse cargo de las situaciones, y se encuentra cómodo liderando grupos",
      "HighTerm": "Asertivo",
      "LowDescription": "Prefiere escuchar antes que hablar, especialmente en situaciones de grupo",
      "Big5": "Extraversion"
    },
    "Artistic-interests": {
      "LowTerm": "Una persona desinteresada por el arte",
      "HighDescription": "Disfruta de la belleza y busca experiencias creativas",
      "HighTerm": "Una persona que aprecia el arte",
      "LowDescription": "Le interesan menos las actividades artísticas o creativas que la mayoría de las personas que participaron de nuestras encuestas",
      "Big5": "Openness"
    },
    "Self-consciousness": {
      "LowTerm": "Confiado",
      "HighDescription": "Es sensible a lo que las demás personas podrían estar pensando acerca de usted",
      "HighTerm": "Consciente de sí mismo",
      "LowDescription": "Es difícil de avergonzar y confía en sí mismo la mayor parte del tiempo",
      "Big5": "Neuroticism"
    },
    "Depression": {
      "LowTerm": "Una persona satisfecha",
      "HighDescription": "Piensa bastante seguido en las cosas con las que está disconforme",
      "HighTerm": "Melancólico",
      "LowDescription": "Generalmente se acepta a usted mismo tal cual es",
      "Big5": "Neuroticism"
    },
    "Imagination": {
      "LowTerm": "Una persona con los pies en la tierra",
      "HighDescription": "Su imaginación vuela libre",
      "HighTerm": "Imaginativo",
      "LowDescription": "Prefiere hechos antes que la fantasía",
      "Big5": "Openness"
    },
    "Morality": {
      "LowTerm": "Una persona comprometida",
      "HighDescription": "Piensa que está mal tomar ventaja de los demás para avanzar",
      "HighTerm": "Intransigente",
      "LowDescription": "Utiliza cualquier medio posible para conseguir lo que quiere y está cómodo con ello",
      "Big5": "Agreeableness"
    },
    "Self-discipline": {
      "LowTerm": "Intermitente",
      "HighDescription": "Puede hacer frente y llevar a cabo tareas difíciles",
      "HighTerm": "Persistente",
      "LowDescription": "Le da trabajo llevar adelante tareas difíciles por un largo periodo de tiempo",
      "Big5": "Conscientiousness"
    },
    "Dutifulness": {
      "LowTerm": "Despreocupado",
      "HighDescription": "Toma las reglas y las obligaciones seriamente, aún cuando son inconvenientes",
      "HighTerm": "Una persona que cumple con su deber",
      "LowDescription": "Hace lo que quiere sin importar las reglas y las obligaciones",
      "Big5": "Conscientiousness"
    },
    "Activity-level": {
      "LowTerm": "Relajado",
      "HighDescription": "Disfruta llevar un ritmo de vida acelerado, una agenda ocupada con muchas actividades",
      "HighTerm": "Energético",
      "LowDescription": "Aprecia llevar un ritmo de vida relajado",
      "Big5": "Extraversion"
    },
    "Vulnerability": {
      "LowTerm": "Una persona que mantiene la calma bajo presión",
      "HighDescription": "Se abruma fácilmente en situaciones de estrés",
      "HighTerm": "Susceptible al estrés",
      "LowDescription": "Maneja eventos inesperados con calma y efectivamente",
      "Big5": "Neuroticism"
    },
    "Anxiety": {
      "LowTerm": "Seguro de sí mismo",
      "HighDescription": "Tiende a preocuparse acerca de las cosas que podrían pasar",
      "HighTerm": "Propenso a preocuparse",
      "LowDescription": "Tiende a sentirse tranquilo y a confiar en sí mismo",
      "Big5": "Neuroticism"
    },
    "Sympathy": {
      "LowTerm": "Una persona de gran fortaleza",
      "HighDescription": "Siente lo que otros sienten y es compasivo con ellos",
      "HighTerm": "Empático",
      "LowDescription": "Cree que las personas deberían confiar más en sí mismos que en otras personas",
      "Big5": "Agreeableness"
    },
    "Achievement-striving": {
      "LowTerm": "Una persona satisfecha",
      "HighDescription": "Se propone grandes metas y trabaja duro para alcanzarlas",
      "HighTerm": "Una persona motivada",
      "LowDescription": "Está conforme con sus logros y no siente la necesidad de ponerse metas más ambiciosas",
      "Big5": "Conscientiousness"
    },
    "Altruism": {
      "LowTerm": "Individualista",
      "HighDescription": "Se siente realizado ayudando a otros y dejará sus cosas de lado para hacerlo",
      "HighTerm": "Altruista",
      "LowDescription": "Está más enfocado en cuidar de usted mismo que en dedicar tiempo a otras personas",
      "Big5": "Agreeableness"
    },
    "Immoderation": {
      "LowTerm": "Sereno",
      "HighDescription": "Siente fuertemente sus deseos y es fácilmente tentado por ellos",
      "HighTerm": "Hedonista",
      "LowDescription": "Controla sus deseos, los cuales no son particularmente intensos",
      "Big5": "Neuroticism"
    },
    "Self-efficacy": {
      "LowTerm": "Inseguro de sí misma",
      "HighDescription": "Siente que tiene la habilidad de triunfar en las tareas que se propone realizar",
      "HighTerm": "Seguro de sí mismo",
      "LowDescription": "Frecuentemente duda acerca de su habilidad para alcanzar sus metas",
      "Big5": "Conscientiousness"
    },
    "Friendliness": {
      "LowTerm": "Reservado",
      "HighDescription": "Hace amigos fácilmente y se siente cómodo estando con otras personas",
      "HighTerm": "Extrovertido",
      "LowDescription": "Es una persona reservada y no deja a muchas personas entrar",
      "Big5": "Extraversion"
    },
    "Gregariousness": {
      "LowTerm": "Independiente",
      "HighDescription": "Disfruta estando en compañía de otros",
      "HighTerm": "Sociable",
      "LowDescription": "Tiene un fuerte deseo de tener tiempo para usted mismo",
      "Big5": "Extraversion"
    },
    "Adventurousness": {
      "LowTerm": "Consistente",
      "HighDescription": "Está deseoso de tener nuevas experiencias",
      "HighTerm": "Audaz",
      "LowDescription": "Disfruta de las rutinas familiares y prefiere no desviarse de ellas",
      "Big5": "Openness"
    },
    "Intellect": {
      "LowTerm": "Concreto",
      "HighDescription": "Está abierto a nuevas ideas, le intrigan y ama explorarlas",
      "HighTerm": "Filosófico",
      "LowDescription": "Prefiere lidiar con el mundo tal cual es, raramente considerando ideas abstractas",
      "Big5": "Openness"
    }
  },
  "needs": {
    "Love": [
      "afinidad",
      "conexión"
    ],
    "Excitement": [
      "regocijo",
      "anticipación",
      "cebración"
    ],
    "Liberty": [
      "modernidad",
      "expansión de posibilidades",
      "poder escapar",
      "espontaneidad",
      "novedad"
    ],
    "Structure": [
      "organización",
      "franqueza",
      "claridad",
      "confiabilidad"
    ],
    "Practicality": [
      "eficiencia",
      "practicidad",
      "valor agregado",
      "conveniencia"
    ],
    "Self-expression": [
      "auto-expresión",
      "empoderamiento personal",
      "fortaleza personal"
    ],
    "Closeness": [
      "pertenencia",
      "nostalgia",
      "intimidad"
    ],
    "Challenge": [
      "prestigio",
      "competencia",
      "gloria"
    ],
    "Curiosity": [
      "descubrimiento",
      "maestría",
      "adquisición de conocimiento"
    ],
    "Stability": [
      "estabilidad",
      "autenticidad",
      "integridad"
    ],
    "Harmony": [
      "bienestar",
      "cortesía",
      "civilidad"
    ],
    "Ideal": [
      "sofisticación",
      "espiritualidad",
      "superioridad",
      "realización"
    ]
  },
  "phrases": {
    "Experiences that give a sense of %s hold some appeal to you": "Le agradan las experiencias que le dan una sensación de %s",
    "You consider %s to guide a large part of what you do": "Usted considera que %s lo guia en gran parte de lo que hace",
    "You value both %s a bit": "Usted valora a %s un poco",
    "And %s": "Y %s",
    "And you are %s": "Y usted es %s",
    "a bit %s": "un poco %s",
    "can be perceived as %s": "puede ser percibido como %s",
    "You are relatively unconcerned with both %s and %s": "Usted es relativamente indiferente con %s y %s",
    "You are %s and %s": "Usted es %s y %s",
    "You value both %s and %s a bit": "Usted valora a %s y %s un poco",
    "You don't find %s to be particularly motivating for you": "Usted no encuentra a %s particularmente motivante para usted",
    "You are %s": "Usted es %s",
    "You are %s, %s and %s": "Usted es %s, %s y %s",
    "You are motivated to seek out experiences that provide a strong feeling of %s": "Está motivado a buscar experiencias que lo provean de una fuerte sensación de %s",
    "Experiences that make you feel high %s are generally unappealing to you": "No le agradan las experiencias que le dan una gran sensación de %s",
    "You don't find either %s or %s to be particularly motivating for you": "Usted no encuentra a %s o %s particularmente motivantes para usted",
    "You are relatively unconcerned with %s": "Usted es relativamente indiferente con %s",
    "somewhat %s": "algo %s",
    "Your choices are driven by a desire for %s": "Sus elecciones están determinadas por un deseo de %s",
    "You consider both %s and %s to guide a large part of what you do": "Usted considera que %s y %s lo guian en gran parte de lo que hace"
  },
  "traits": {
    "Agreeableness_plus_Neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "generoso"
      },
      {
        "perceived_negatively": false,
        "word": "agradable"
      },
      {
        "perceived_negatively": false,
        "word": "tolerante"
      },
      {
        "perceived_negatively": false,
        "word": "pacífico"
      },
      {
        "perceived_negatively": false,
        "word": "flexible"
      },
      {
        "perceived_negatively": false,
        "word": "fácil de tratar"
      },
      {
        "perceived_negatively": false,
        "word": "justo"
      },
      {
        "perceived_negatively": false,
        "word": "caritativo"
      },
      {
        "perceived_negatively": false,
        "word": "confiable"
      }
    ],
    "Extraversion_plus_Openness_plus": [
      {
        "perceived_negatively": false,
        "word": "expresivo"
      },
      {
        "perceived_negatively": false,
        "word": "cándido"
      },
      {
        "perceived_negatively": false,
        "word": "dramático"
      },
      {
        "perceived_negatively": false,
        "word": "espontáneo"
      },
      {
        "perceived_negatively": false,
        "word": "ingenioso"
      },
      {
        "perceived_negatively": false,
        "word": "oportunista"
      },
      {
        "perceived_negatively": false,
        "word": "independiente"
      }
    ],
    "Extraversion_minus_Neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "desconfiado"
      },
      {
        "perceived_negatively": false,
        "word": "pesimista"
      },
      {
        "perceived_negatively": false,
        "word": "reservado"
      },
      {
        "perceived_negatively": true,
        "word": "cobarde"
      },
      {
        "perceived_negatively": false,
        "word": "callado"
      }
    ],
    "Conscientiousness_minus_Extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "revoltoso"
      },
      {
        "perceived_negatively": false,
        "word": "bullicioso"
      },
      {
        "perceived_negatively": true,
        "word": "temerario"
      },
      {
        "perceived_negatively": true,
        "word": "tumultuoso"
      },
      {
        "perceived_negatively": false,
        "word": "demostrativo"
      }
    ],
    "Agreeableness_minus_Conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "desconsiderado"
      },
      {
        "perceived_negatively": true,
        "word": "descortés"
      },
      {
        "perceived_negatively": true,
        "word": "desconfiado"
      },
      {
        "perceived_negatively": true,
        "word": "poco cooperativo"
      },
      {
        "perceived_negatively": true,
        "word": "irreflexivo"
      }
    ],
    "Neuroticism_minus_Openness_plus": [
      {
        "perceived_negatively": false,
        "word": "sentido"
      },
      {
        "perceived_negatively": false,
        "word": "versátil"
      },
      {
        "perceived_negatively": false,
        "word": "creativo"
      },
      {
        "perceived_negatively": false,
        "word": "intelectual"
      },
      {
        "perceived_negatively": false,
        "word": "perspicaz"
      }
    ],
    "Openness_plus_Agreeableness_minus": [
      {
        "perceived_negatively": false,
        "word": "perspicaz"
      },
      {
        "perceived_negatively": false,
        "word": "excéntrico"
      },
      {
        "perceived_negatively": false,
        "word": "individualista"
      }
    ],
    "Agreeableness_minus_Extraversion_minus": [
      {
        "perceived_negatively": true,
        "word": "cínico"
      },
      {
        "perceived_negatively": true,
        "word": "cauto con los demás"
      },
      {
        "perceived_negatively": true,
        "word": "solitario"
      },
      {
        "perceived_negatively": true,
        "word": "desapegado"
      },
      {
        "perceived_negatively": true,
        "word": "impersonal"
      },
      {
        "perceived_negatively": true,
        "word": "sombrío"
      }
    ],
    "Extraversion_minus_Neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "tranquilo"
      },
      {
        "perceived_negatively": false,
        "word": "sosegado"
      },
      {
        "perceived_negatively": false,
        "word": "plácido"
      },
      {
        "perceived_negatively": false,
        "word": "imparcial"
      },
      {
        "perceived_negatively": false,
        "word": "modesto"
      },
      {
        "perceived_negatively": false,
        "word": "condescendiente"
      }
    ],
    "Openness_plus_Extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "introspectivo"
      },
      {
        "perceived_negatively": false,
        "word": "meditativo"
      },
      {
        "perceived_negatively": false,
        "word": "contemplativo"
      },
      {
        "perceived_negatively": false,
        "word": "introspectivo"
      },
      {
        "perceived_negatively": false,
        "word": "pensativo"
      }
    ],
    "Neuroticism_minus_Agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "paciente"
      },
      {
        "perceived_negatively": false,
        "word": "relajado"
      },
      {
        "perceived_negatively": false,
        "word": "poco exigente"
      },
      {
        "perceived_negatively": false,
        "word": "realista"
      },
      {
        "perceived_negatively": false,
        "word": "optimista"
      },
      {
        "perceived_negatively": false,
        "word": "modesto"
      },
      {
        "perceived_negatively": false,
        "word": "poco crítico"
      },
      {
        "perceived_negatively": false,
        "word": "poco pretencioso"
      }
    ],
    "Neuroticism_minus_Agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "poco emocional"
      },
      {
        "perceived_negatively": true,
        "word": "insensible"
      },
      {
        "perceived_negatively": true,
        "word": "poco cariñoso"
      },
      {
        "perceived_negatively": true,
        "word": "desapasionado"
      }
    ],
    "Agreeableness_plus_Conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "servicial"
      },
      {
        "perceived_negatively": false,
        "word": "cooperativo"
      },
      {
        "perceived_negatively": false,
        "word": "considerado"
      },
      {
        "perceived_negatively": false,
        "word": "respetuoso"
      },
      {
        "perceived_negatively": false,
        "word": "cortés"
      },
      {
        "perceived_negatively": false,
        "word": "sensato"
      },
      {
        "perceived_negatively": false,
        "word": "atento"
      },
      {
        "perceived_negatively": false,
        "word": "considerado"
      },
      {
        "perceived_negatively": false,
        "word": "leal"
      },
      {
        "perceived_negatively": false,
        "word": "moral"
      }
    ],
    "Openness_minus_Neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "irritable"
      },
      {
        "perceived_negatively": false,
        "word": "fastidioso"
      },
      {
        "perceived_negatively": false,
        "word": "aprensivo"
      }
    ],
    "Openness_minus_Agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "ordinario"
      },
      {
        "perceived_negatively": true,
        "word": "sin tacto"
      },
      {
        "perceived_negatively": true,
        "word": "brusco"
      },
      {
        "perceived_negatively": true,
        "word": "cerrado"
      },
      {
        "perceived_negatively": true,
        "word": "duro"
      }
    ],
    "Extraversion_minus_Agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "pacífico"
      },
      {
        "perceived_negatively": false,
        "word": "humilde"
      },
      {
        "perceived_negatively": false,
        "word": "sumiso"
      },
      {
        "perceived_negatively": false,
        "word": "tímido"
      },
      {
        "perceived_negatively": false,
        "word": "obediente"
      },
      {
        "perceived_negatively": false,
        "word": "ingenuo"
      }
    ],
    "Extraversion_plus_Neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "explosivo"
      },
      {
        "perceived_negatively": true,
        "word": "verborrágico"
      },
      {
        "perceived_negatively": false,
        "word": "extravagante"
      },
      {
        "perceived_negatively": true,
        "word": "volátil"
      },
      {
        "perceived_negatively": false,
        "word": "coqueto"
      }
    ],
    "Extraversion_minus_Openness_minus": [
      {
        "perceived_negatively": false,
        "word": "sombrío"
      },
      {
        "perceived_negatively": true,
        "word": "manso"
      },
      {
        "perceived_negatively": true,
        "word": "poco aventurero"
      },
      {
        "perceived_negatively": false,
        "word": "pasivo"
      },
      {
        "perceived_negatively": true,
        "word": "apático"
      },
      {
        "perceived_negatively": false,
        "word": "dócil"
      }
    ],
    "Agreeableness_minus_Openness_plus": [
      {
        "perceived_negatively": false,
        "word": "perspicaz"
      },
      {
        "perceived_negatively": false,
        "word": "excéntrico"
      },
      {
        "perceived_negatively": false,
        "word": "individualista"
      }
    ],
    "Openness_plus_Neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "creativo"
      },
      {
        "perceived_negatively": false,
        "word": "intelectual"
      },
      {
        "perceived_negatively": false,
        "word": "perspicaz"
      },
      {
        "perceived_negatively": false,
        "word": "versátil"
      },
      {
        "perceived_negatively": false,
        "word": "inventivo"
      }
    ],
    "Conscientiousness_minus_Neuroticism_plus": [
      {
        "perceived_negatively": true,
        "word": "atolondrado"
      },
      {
        "perceived_negatively": true,
        "word": "inconsistente"
      },
      {
        "perceived_negatively": true,
        "word": "errático"
      },
      {
        "perceived_negatively": true,
        "word": "olvidadizo"
      },
      {
        "perceived_negatively": true,
        "word": "impulsivo"
      },
      {
        "perceived_negatively": true,
        "word": "frívolo"
      }
    ],
    "Openness_plus_Extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "mundano"
      },
      {
        "perceived_negatively": false,
        "word": "exagerado"
      },
      {
        "perceived_negatively": false,
        "word": "elocuente"
      },
      {
        "perceived_negatively": false,
        "word": "inquisitivo"
      },
      {
        "perceived_negatively": false,
        "word": "intenso"
      }
    ],
    "Openness_plus_Agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "idealista"
      },
      {
        "perceived_negatively": false,
        "word": "diplomático"
      },
      {
        "perceived_negatively": false,
        "word": "profundo"
      },
      {
        "perceived_negatively": false,
        "word": "una persona con tacto"
      },
      {
        "perceived_negatively": false,
        "word": "amistoso"
      }
    ],
    "Agreeableness_minus_Conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "estricto"
      },
      {
        "perceived_negatively": false,
        "word": "rígido"
      },
      {
        "perceived_negatively": true,
        "word": "duro"
      }
    ],
    "Openness_plus_Conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "poco convencional"
      },
      {
        "perceived_negatively": false,
        "word": "peculiar"
      }
    ],
    "Neuroticism_plus_Conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "compulsivo"
      },
      {
        "perceived_negatively": true,
        "word": "inquisitivo"
      },
      {
        "perceived_negatively": true,
        "word": "desenfrenado"
      },
      {
        "perceived_negatively": true,
        "word": "olvidadizo"
      },
      {
        "perceived_negatively": true,
        "word": "impulsivo"
      }
    ],
    "Neuroticism_minus_Conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "racional"
      },
      {
        "perceived_negatively": false,
        "word": "objetivo"
      },
      {
        "perceived_negatively": false,
        "word": "estable"
      },
      {
        "perceived_negatively": false,
        "word": "lógico"
      },
      {
        "perceived_negatively": false,
        "word": "decidido"
      },
      {
        "perceived_negatively": false,
        "word": "preparado"
      },
      {
        "perceived_negatively": false,
        "word": "conciso"
      },
      {
        "perceived_negatively": false,
        "word": "exhaustivo"
      },
      {
        "perceived_negatively": false,
        "word": "económico"
      },
      {
        "perceived_negatively": false,
        "word": "disciplinado"
      }
    ],
    "Agreeableness_minus_Openness_minus": [
      {
        "perceived_negatively": true,
        "word": "tosco"
      },
      {
        "perceived_negatively": true,
        "word": "una persona sin tacto"
      },
      {
        "perceived_negatively": true,
        "word": "brusco"
      },
      {
        "perceived_negatively": true,
        "word": "cerrado"
      },
      {
        "perceived_negatively": true,
        "word": "áspero"
      },
      {
        "perceived_negatively": true,
        "word": "implacable"
      },
      {
        "perceived_negatively": true,
        "word": "poco caritativo"
      },
      {
        "perceived_negatively": true,
        "word": "vengativo"
      }
    ],
    "Conscientiousness_minus_Extraversion_minus": [
      {
        "perceived_negatively": true,
        "word": "indeciso"
      },
      {
        "perceived_negatively": true,
        "word": "una persona sin propósito"
      },
      {
        "perceived_negatively": false,
        "word": "una persona sin carácter"
      },
      {
        "perceived_negatively": false,
        "word": "una persona sin compromiso"
      },
      {
        "perceived_negatively": true,
        "word": "poco ambicioso"
      }
    ],
    "Agreeableness_minus_Extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "obstinado"
      },
      {
        "perceived_negatively": true,
        "word": "abrupto"
      },
      {
        "perceived_negatively": true,
        "word": "crudo"
      },
      {
        "perceived_negatively": true,
        "word": "combativo"
      },
      {
        "perceived_negatively": true,
        "word": "duro"
      },
      {
        "perceived_negatively": false,
        "word": "astuto"
      },
      {
        "perceived_negatively": true,
        "word": "manipulador"
      },
      {
        "perceived_negatively": true,
        "word": "hosco"
      },
      {
        "perceived_negatively": true,
        "word": "taimado"
      }
    ],
    "Agreeableness_minus_Neuroticism_plus": [
      {
        "perceived_negatively": true,
        "word": "crítico"
      },
      {
        "perceived_negatively": true,
        "word": "egoísta"
      },
      {
        "perceived_negatively": true,
        "word": "de mal genio"
      },
      {
        "perceived_negatively": true,
        "word": "antagonista"
      },
      {
        "perceived_negatively": true,
        "word": "gruñón"
      },
      {
        "perceived_negatively": true,
        "word": "amargado"
      },
      {
        "perceived_negatively": true,
        "word": "desagradable"
      },
      {
        "perceived_negatively": true,
        "word": "exigente"
      }
    ],
    "Conscientiousness_plus_Extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "cauto"
      },
      {
        "perceived_negatively": false,
        "word": "seguro"
      },
      {
        "perceived_negatively": false,
        "word": "exacto"
      },
      {
        "perceived_negatively": false,
        "word": "formal"
      },
      {
        "perceived_negatively": false,
        "word": "ahorrativo"
      },
      {
        "perceived_negatively": false,
        "word": "principista"
      }
    ],
    "Extraversion_minus_Conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "indirecto"
      },
      {
        "perceived_negatively": true,
        "word": "débil"
      },
      {
        "perceived_negatively": true,
        "word": "perezoso"
      },
      {
        "perceived_negatively": true,
        "word": "poco persistente"
      },
      {
        "perceived_negatively": true,
        "word": "vago"
      }
    ],
    "Extraversion_plus_Agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "social"
      },
      {
        "perceived_negatively": false,
        "word": "enérgico"
      },
      {
        "perceived_negatively": false,
        "word": "entusiasta"
      },
      {
        "perceived_negatively": false,
        "word": "comunicativo"
      },
      {
        "perceived_negatively": false,
        "word": "vibrante"
      },
      {
        "perceived_negatively": false,
        "word": "espirituoso"
      },
      {
        "perceived_negatively": false,
        "word": "magnético"
      },
      {
        "perceived_negatively": false,
        "word": "entusiasta"
      }
    ],
    "Conscientiousness_minus_Openness_plus": [
      {
        "perceived_negatively": false,
        "word": "poco convencional"
      },
      {
        "perceived_negatively": false,
        "word": "peculiar"
      }
    ],
    "Conscientiousness_plus_Extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "ambicioso"
      },
      {
        "perceived_negatively": false,
        "word": "alerta"
      },
      {
        "perceived_negatively": false,
        "word": "firme"
      },
      {
        "perceived_negatively": false,
        "word": "decidido"
      },
      {
        "perceived_negatively": false,
        "word": "competitivo"
      }
    ],
    "Neuroticism_minus_Extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "modesto"
      },
      {
        "perceived_negatively": true,
        "word": "poco excitable"
      },
      {
        "perceived_negatively": false,
        "word": "plácido"
      },
      {
        "perceived_negatively": false,
        "word": "tranquilo"
      }
    ],
    "Agreeableness_plus_Extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "efervescente"
      },
      {
        "perceived_negatively": false,
        "word": "alegre"
      },
      {
        "perceived_negatively": false,
        "word": "amistoso"
      },
      {
        "perceived_negatively": false,
        "word": "alegre"
      },
      {
        "perceived_negatively": false,
        "word": "jovial"
      },
      {
        "perceived_negatively": false,
        "word": "jocoso"
      }
    ],
    "Neuroticism_plus_Openness_plus": [
      {
        "perceived_negatively": false,
        "word": "excitable"
      },
      {
        "perceived_negatively": false,
        "word": "apasionado"
      },
      {
        "perceived_negatively": false,
        "word": "sensual"
      }
    ],
    "Conscientiousness_minus_Neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "informal"
      },
      {
        "perceived_negatively": false,
        "word": "de bajo perfil"
      }
    ],
    "Extraversion_minus_Agreeableness_minus": [
      {
        "perceived_negatively": false,
        "word": "escéptico"
      },
      {
        "perceived_negatively": false,
        "word": "cauto con los demás"
      },
      {
        "perceived_negatively": true,
        "word": "solitario"
      },
      {
        "perceived_negatively": true,
        "word": "poco comunicativo"
      },
      {
        "perceived_negatively": true,
        "word": "antisocial"
      },
      {
        "perceived_negatively": true,
        "word": "sombrío"
      },
      {
        "perceived_negatively": true,
        "word": "desinteresado"
      },
      {
        "perceived_negatively": false,
        "word": "apartado"
      }
    ],
    "Neuroticism_plus_Openness_minus": [
      {
        "perceived_negatively": false,
        "word": "irritable"
      },
      {
        "perceived_negatively": false,
        "word": "fastidioso"
      },
      {
        "perceived_negatively": false,
        "word": "aprensivo"
      }
    ],
    "Conscientiousness_plus_Openness_minus": [
      {
        "perceived_negatively": false,
        "word": "tradicional"
      },
      {
        "perceived_negatively": false,
        "word": "convencional"
      }
    ],
    "Conscientiousness_minus_Openness_minus": [
      {
        "perceived_negatively": false,
        "word": "temerario"
      },
      {
        "perceived_negatively": true,
        "word": "ilógico"
      },
      {
        "perceived_negatively": true,
        "word": "inmaduro"
      },
      {
        "perceived_negatively": true,
        "word": "azaroso"
      },
      {
        "perceived_negatively": false,
        "word": "laxo"
      },
      {
        "perceived_negatively": true,
        "word": "indisciplinado"
      }
    ],
    "Extraversion_minus_Conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "moderado"
      },
      {
        "perceived_negatively": false,
        "word": "serio"
      },
      {
        "perceived_negatively": false,
        "word": "discreto"
      },
      {
        "perceived_negatively": false,
        "word": "cauteloso"
      },
      {
        "perceived_negatively": false,
        "word": "principista"
      }
    ],
    "Openness_minus_Conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "convencional"
      },
      {
        "perceived_negatively": false,
        "word": "tradicional"
      }
    ],
    "Neuroticism_plus_Agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "emotivo"
      },
      {
        "perceived_negatively": true,
        "word": "crédulo"
      },
      {
        "perceived_negatively": false,
        "word": "cariñoso"
      },
      {
        "perceived_negatively": false,
        "word": "sensible"
      },
      {
        "perceived_negatively": false,
        "word": "blando"
      }
    ],
    "Agreeableness_minus_Neuroticism_minus": [
      {
        "perceived_negatively": true,
        "word": "insensible"
      },
      {
        "perceived_negatively": true,
        "word": "poco afectuoso"
      },
      {
        "perceived_negatively": true,
        "word": "desapasionado"
      },
      {
        "perceived_negatively": true,
        "word": "una persona sin emociones"
      }
    ],
    "Neuroticism_plus_Extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "guardado"
      },
      {
        "perceived_negatively": true,
        "word": "irritable"
      },
      {
        "perceived_negatively": true,
        "word": "inseguro"
      },
      {
        "perceived_negatively": true,
        "word": "pesimista"
      },
      {
        "perceived_negatively": false,
        "word": "reservado"
      },
      {
        "perceived_negatively": true,
        "word": "temeroso"
      },
      {
        "perceived_negatively": true,
        "word": "negativo"
      },
      {
        "perceived_negatively": false,
        "word": "auto-crítico"
      }
    ],
    "Agreeableness_plus_Openness_plus": [
      {
        "perceived_negatively": false,
        "word": "amistoso"
      },
      {
        "perceived_negatively": false,
        "word": "una persona con tacto"
      },
      {
        "perceived_negatively": false,
        "word": "diplomático"
      },
      {
        "perceived_negatively": false,
        "word": "profundo"
      },
      {
        "perceived_negatively": false,
        "word": "idealista"
      }
    ],
    "Extraversion_plus_Conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "bullicioso"
      },
      {
        "perceived_negatively": false,
        "word": "travieso"
      },
      {
        "perceived_negatively": false,
        "word": "exhibicionista"
      },
      {
        "perceived_negatively": false,
        "word": "gregario"
      },
      {
        "perceived_negatively": false,
        "word": "demostrativo"
      }
    ],
    "Neuroticism_minus_Openness_minus": [
      {
        "perceived_negatively": false,
        "word": "imperturbable"
      },
      {
        "perceived_negatively": true,
        "word": "insensible"
      }
    ],
    "Openness_plus_Conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "analítico"
      },
      {
        "perceived_negatively": false,
        "word": "perceptivo"
      },
      {
        "perceived_negatively": false,
        "word": "informativo"
      },
      {
        "perceived_negatively": false,
        "word": "grandilocuente"
      },
      {
        "perceived_negatively": false,
        "word": "digno"
      },
      {
        "perceived_negatively": false,
        "word": "culto"
      }
    ],
    "Neuroticism_minus_Extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "inconsciente de si mismo"
      },
      {
        "perceived_negatively": false,
        "word": "incansable"
      },
      {
        "perceived_negatively": false,
        "word": "infatigable"
      }
    ],
    "Extraversion_plus_Neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "confiado"
      },
      {
        "perceived_negatively": false,
        "word": "audaz"
      },
      {
        "perceived_negatively": false,
        "word": "seguro"
      },
      {
        "perceived_negatively": false,
        "word": "desinhibido"
      },
      {
        "perceived_negatively": false,
        "word": "valiente"
      },
      {
        "perceived_negatively": false,
        "word": "valiente"
      },
      {
        "perceived_negatively": false,
        "word": "una persona satisfecha de si misma"
      },
      {
        "perceived_negatively": false,
        "word": "vigoroso"
      },
      {
        "perceived_negatively": false,
        "word": "fuerte"
      }
    ],
    "Neuroticism_minus_Conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "informal"
      },
      {
        "perceived_negatively": false,
        "word": "de perfil bajo"
      }
    ],
    "Openness_minus_Extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "verborrágico"
      },
      {
        "perceived_negatively": true,
        "word": "inescrupuloso"
      },
      {
        "perceived_negatively": true,
        "word": "pomposo"
      }
    ],
    "Openness_minus_Agreeableness_plus": [
      {
        "perceived_negatively": true,
        "word": "simple"
      },
      {
        "perceived_negatively": true,
        "word": "dependiente"
      }
    ],
    "Conscientiousness_minus_Agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "arrebatado"
      },
      {
        "perceived_negatively": true,
        "word": "poco cooperativo"
      },
      {
        "perceived_negatively": true,
        "word": "poco fiable"
      },
      {
        "perceived_negatively": true,
        "word": "desconfiado"
      },
      {
        "perceived_negatively": true,
        "word": "irreflexivo"
      }
    ],
    "Conscientiousness_plus_Openness_plus": [
      {
        "perceived_negatively": false,
        "word": "sofisticado"
      },
      {
        "perceived_negatively": false,
        "word": "perfeccionista"
      },
      {
        "perceived_negatively": false,
        "word": "industrioso"
      },
      {
        "perceived_negatively": false,
        "word": "digno"
      },
      {
        "perceived_negatively": false,
        "word": "refinado"
      },
      {
        "perceived_negatively": false,
        "word": "culto"
      },
      {
        "perceived_negatively": false,
        "word": "previsor"
      }
    ],
    "Agreeableness_plus_Conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "sobrio"
      },
      {
        "perceived_negatively": false,
        "word": "modesto"
      }
    ],
    "Agreeableness_plus_Neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "sentimental"
      },
      {
        "perceived_negatively": false,
        "word": "cariñoso"
      },
      {
        "perceived_negatively": false,
        "word": "sensible"
      },
      {
        "perceived_negatively": false,
        "word": "tierno"
      },
      {
        "perceived_negatively": false,
        "word": "apasionado"
      },
      {
        "perceived_negatively": false,
        "word": "romántico"
      }
    ],
    "Conscientiousness_plus_Neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "minucioso"
      },
      {
        "perceived_negatively": false,
        "word": "estable"
      },
      {
        "perceived_negatively": false,
        "word": "consistente"
      },
      {
        "perceived_negatively": false,
        "word": "disciplinado"
      },
      {
        "perceived_negatively": false,
        "word": "lógico"
      },
      {
        "perceived_negatively": false,
        "word": "decidido"
      },
      {
        "perceived_negatively": false,
        "word": "controlado"
      },
      {
        "perceived_negatively": false,
        "word": "conciso"
      }
    ],
    "Openness_minus_Extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "predecible"
      },
      {
        "perceived_negatively": true,
        "word": "poco imaginativo"
      },
      {
        "perceived_negatively": false,
        "word": "sombrío"
      },
      {
        "perceived_negatively": true,
        "word": "apático"
      },
      {
        "perceived_negatively": true,
        "word": "poco aventurero"
      }
    ],
    "Extraversion_plus_Agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "terco"
      },
      {
        "perceived_negatively": true,
        "word": "vigoroso"
      },
      {
        "perceived_negatively": true,
        "word": "dominador"
      },
      {
        "perceived_negatively": true,
        "word": "presumido"
      },
      {
        "perceived_negatively": true,
        "word": "mandón"
      },
      {
        "perceived_negatively": false,
        "word": "dominante"
      },
      {
        "perceived_negatively": false,
        "word": "astuto"
      }
    ],
    "Neuroticism_plus_Extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "excitable"
      },
      {
        "perceived_negatively": true,
        "word": "verborrágico"
      },
      {
        "perceived_negatively": false,
        "word": "coqueto"
      },
      {
        "perceived_negatively": true,
        "word": "explosivo"
      },
      {
        "perceived_negatively": false,
        "word": "extravagante"
      },
      {
        "perceived_negatively": true,
        "word": "volátil"
      }
    ],
    "Agreeableness_plus_Extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "conmovible"
      },
      {
        "perceived_negatively": false,
        "word": "agradable"
      },
      {
        "perceived_negatively": false,
        "word": "servicial"
      },
      {
        "perceived_negatively": false,
        "word": "humilde"
      },
      {
        "perceived_negatively": true,
        "word": "indulgente"
      }
    ],
    "Conscientiousness_plus_Agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "inflexible"
      },
      {
        "perceived_negatively": false,
        "word": "estricto"
      },
      {
        "perceived_negatively": false,
        "word": "rígido"
      }
    ],
    "Openness_minus_Conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "cortoplacista"
      },
      {
        "perceived_negatively": false,
        "word": "temerario"
      },
      {
        "perceived_negatively": true,
        "word": "ilógico"
      },
      {
        "perceived_negatively": true,
        "word": "inmaduro"
      },
      {
        "perceived_negatively": true,
        "word": "azaroso"
      },
      {
        "perceived_negatively": false,
        "word": "laxo"
      },
      {
        "perceived_negatively": true,
        "word": "irrespetuoso"
      }
    ],
    "Conscientiousness_plus_Neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "detallista"
      },
      {
        "perceived_negatively": true,
        "word": "excitable"
      }
    ],
    "Extraversion_plus_Conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "activo"
      },
      {
        "perceived_negatively": false,
        "word": "competitivo"
      },
      {
        "perceived_negatively": false,
        "word": "persistente"
      },
      {
        "perceived_negatively": false,
        "word": "ambicioso"
      },
      {
        "perceived_negatively": false,
        "word": "decidido"
      }
    ],
    "Extraversion_minus_Openness_plus": [
      {
        "perceived_negatively": false,
        "word": "una persona guiada por su propia consciencia y valores"
      },
      {
        "perceived_negatively": false,
        "word": "introspectivo"
      },
      {
        "perceived_negatively": false,
        "word": "pensativo"
      },
      {
        "perceived_negatively": false,
        "word": "contemplativo"
      },
      {
        "perceived_negatively": false,
        "word": "introspectivo"
      }
    ],
    "Conscientiousness_plus_Agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "confiable"
      },
      {
        "perceived_negatively": false,
        "word": "responsable"
      },
      {
        "perceived_negatively": false,
        "word": "seguro"
      },
      {
        "perceived_negatively": false,
        "word": "educado"
      },
      {
        "perceived_negatively": false,
        "word": "considerado"
      }
    ],
    "Openness_plus_Neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "apasionado"
      },
      {
        "perceived_negatively": false,
        "word": "excitable"
      },
      {
        "perceived_negatively": false,
        "word": "sensual"
      }
    ],
    "Conscientiousness_minus_Agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "poco pretencioso"
      },
      {
        "perceived_negatively": false,
        "word": "modesto"
      }
    ],
    "Openness_minus_Neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "imperturbable"
      },
      {
        "perceived_negatively": true,
        "word": "insensible"
      }
    ],
    "Neuroticism_plus_Conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "detallista"
      },
      {
        "perceived_negatively": true,
        "word": "excitable"
      }
    ],
    "Neuroticism_plus_Agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "temperamental"
      },
      {
        "perceived_negatively": true,
        "word": "irritable"
      },
      {
        "perceived_negatively": true,
        "word": "peleador"
      },
      {
        "perceived_negatively": true,
        "word": "impaciente"
      },
      {
        "perceived_negatively": true,
        "word": "gruñón"
      },
      {
        "perceived_negatively": true,
        "word": "malhumorado"
      },
      {
        "perceived_negatively": true,
        "word": "irritable"
      }
    ],
    "Agreeableness_plus_Openness_minus": [
      {
        "perceived_negatively": true,
        "word": "dependiente"
      },
      {
        "perceived_negatively": true,
        "word": "simple"
      }
    ],
    "Extraversion_plus_Openness_minus": [
      {
        "perceived_negatively": true,
        "word": "verborrágico"
      },
      {
        "perceived_negatively": true,
        "word": "inescrupuloso"
      },
      {
        "perceived_negatively": true,
        "word": "pomposo"
      }
    ]
  },
  "values": {
    "Self-enhancement": [
      {
        "Term": "Alcanzar el éxito",
        "LowDescription": "Toma decisiones sin considerar cómo muestran sus talentos",
        "HighDescription": "Busca oportunidades para autosuperase y para demostrar que es una persona capaz"
      },
      {
        "Term": "Mejorar su estatus social",
        "LowDescription": "Está conforme con su estatus social y no siente necesidad de mejorarlo",
        "HighDescription": "Se esfuerza considerablemente para mejorar su estatus e imagen pública"
      },
      {
        "Term": "La ambición",
        "LowDescription": "Está conforme con su estatus social y no siente necesidad de mejorarlo",
        "HighDescription": "Siente que es importante avanzar para alcanzar metas"
      },
      {
        "Term": "Los grandes logros",
        "LowDescription": "Toma decisiones sin considerar cómo muestran sus talentos",
        "HighDescription": "Busca oportunidades para autosuperase y para demostrar que es una persona capaz"
      }
    ],
    "Conservation": [
      {
        "Term": "Las tradiciones",
        "LowDescription": "Le importa más seguir su propio camino que seguir el camino de otros",
        "HighDescription": "Tiene mucho respeto por los grupos a los que pertenece y sigue su guía"
      },
      {
        "Term": "La armonía",
        "LowDescription": "Decide qué es lo correcto basado en sus creencias, no en lo que la gente piensa",
        "HighDescription": "Cree que las reglas existen por una razón y nunca intenta trasgredirlas"
      },
      {
        "Term": "La humildad",
        "LowDescription": "Decide qué es lo correcto basado en sus creencias, no en lo que la gente piensa",
        "HighDescription": "Ve valor en deferir a otros"
      },
      {
        "Term": "Las normas sociales",
        "LowDescription": "Decide qué es lo correcto basado en sus creencias, no en lo que la gente piensa",
        "HighDescription": "Cree que las reglas existen por una razón y nunca intenta trasgredirlas"
      },
      {
        "Term": "La seguridad",
        "LowDescription": "Prefiere la seguridad a costa de dejar a un lado sus metas",
        "HighDescription": "Cree que es importante salvaguardar la seguridad"
      },
      {
        "Term": "La seguridad",
        "LowDescription": "Prefiere estar seguro a costa de dejar a un lado sus metas",
        "HighDescription": "Cree que es importante salvaguardar la seguridad"
      }
    ],
    "Self-transcendence": [
      {
        "Term": "Ayudar a los demás",
        "LowDescription": "Cree que las personas pueden encargarse de sus propios asuntos sin interferencia",
        "HighDescription": "Cree que es importante cuidar de las personas que lo rodean"
      },
      {
        "Term": "La justicia",
        "LowDescription": "Cree que son las personas crean sus oportunidades",
        "HighDescription": "Cree en la justicia social y la igualdad para todos"
      },
      {
        "Term": "La justicia social",
        "LowDescription": "Cree que son las personas crean sus oportunidades",
        "HighDescription": "Cree en la justicia social y la igualdad para todos"
      },
      {
        "Term": "La igualdad",
        "LowDescription": "Cree que son las personas crean sus oportunidades",
        "HighDescription": "Cree en la justicia social y la igualdad para todos"
      },
      {
        "Term": "El servicio comunitario",
        "LowDescription": "Cree que las personas pueden encargarse de sus propios asuntos sin interferencia",
        "HighDescription": "Cree que es importante cuidar de las personas que lo rodean"
      }
    ],
    "Openness-to-change": [
      {
        "Term": "Ser independiente",
        "LowDescription": "Recibe de buena manera que otros dirijan sus actividades",
        "HighDescription": "Le gusta establecer sus propias metas para decidir cómo alcanzarlas mejor"
      },
      {
        "Term": "La emoción",
        "LowDescription": "Se apega a las cosas que conoce antes que arriesgarse a probar algo nuevo y riesgoso",
        "HighDescription": "Está ansioso por buscar experiencias nuevas y emocionantes"
      },
      {
        "Term": "La creatividad",
        "LowDescription": "Se apega a las cosas que conoce antes que arriesgarse a probar algo nuevo y riesgoso",
        "HighDescription": "Está ansioso por buscar experiencias nuevas y emocionantes"
      },
      {
        "Term": "La curiosidad",
        "LowDescription": "Se apega a las cosas que conoce antes que arriesgarse a probar algo nuevo y riesgoso",
        "HighDescription": "Está ansioso por buscar experiencias nuevas y emocionantes"
      },
      {
        "Term": "La autonomía",
        "LowDescription": "Recibe de buena manera que otros dirijan sus actividades",
        "HighDescription": "Le gusta establecer sus propias metas para decidir cómo alcanzarlas mejor"
      },
      {
        "Term": "La libertad",
        "LowDescription": "Recibe de buena manera que otros dirijan sus actividades",
        "HighDescription": "Le gusta establecer sus propias metas para decidir cómo alcanzarlas mejor"
      }
    ],
    "Hedonism": [
      {
        "Term": "Disfrutar de la vida",
        "LowDescription": "Prefiere actividades con un propósito más grande que el sólo deleite personal",
        "HighDescription": "Tiene gran motivación por disfrutar la vida en su plenitud"
      }
    ]
  }
}

},{}],3:[function(require,module,exports){
module.exports={
  "big5": {
    "Openness": {
      "HighDescription": "知的好奇心があり、落ち着きがあり、美に敏感で、新しいことを試そうとするタイプです。",
      "LowDescription": "平穏を好み、率直で、複雑なものや曖昧なもの、取るに足らないものに対して関心を持たないタイプです。"
    },
    "Conscientiousness": {
      "HighDescription": "自己統制をし、誠実、あるいは外部の期待や評価に応えようとするタイプです。",
      "LowDescription": "計画に従うより、自発的に物事を行うことを好むタイプです。"
    },
    "Extraversion": {
      "HighDescription": "よりエネルギッシュで、社交的なタイプです。グループ内で目立つこと、話しをすること、自分を主張することが好きです。",
      "LowDescription": "刺激をあまり求めず、人とのかかわりを避けるタイプです。但しそれは、臆病、非友好的、反社会的であるということではありません。"
    },
    "Agreeableness": {
      "HighDescription": "他人とうまくやっていくことを重要視するタイプです。人間の本性に関して楽観的な見方をしています。",
      "LowDescription": "他人より自分の興味を優先するタイプです。 他人の言葉の裏を考えてしまう傾向があります。"
    },
    "Neuroticism": {
      "HighDescription": "否定的な感情を抱いたり、取り乱したりするタイプです。それは、苦労が多いことを意味しているのかも知れません。",
      "LowDescription": "穏やかで、あまり怒らないタイプです。 但し、それは、自信に満ちていたり幸せな人だというわけではありません。"
    }
  },
  "facets" : {
  	"Friendliness": {
  		"Big5": "Extraversion",
  		"LowTerm": "遠慮がちな",
  		"HighTerm": "外向的な",
  		"LowDescription": "プライベートな時間を大切にする人で多くの人々を受け入れません",
  		"HighDescription": "友達を作るのが容易で、他人が近くにいることを快適に感じます"
  	},
  	"Gregariousness": {
  		"Big5": "Extraversion",
  		"LowTerm": "自主性の高い",
  		"HighTerm": "社交的な",
  		"LowDescription": "自分の時間を大切にしたいという強い願望があります",
  		"HighDescription": "他の人達と一緒にいることを楽しいと感じます"
  	},
  	"Assertiveness": {
  		"Big5": "Extraversion",
  		"LowTerm": "慎み深い",
  		"HighTerm": "自己主張が強い",
  		"LowDescription": "特にグループにいる状況では話すことよりも聞くことを好みます",
  		"HighDescription": "遠慮なく発言し、その場をリードする傾向があります。また、集団を統率できます"
  	},
  	"Activity-level": {
  		"Big5": "Extraversion",
  		"LowTerm": "のんびりとしている",
  		"HighTerm": "精力的な",
  		"LowDescription": "ゆったりとしたペースの生活を好みます",
  		"HighDescription": "ペースが速く、多様な活動でスケジュールを埋めることを好みます"
  	},
  	"Excitement-seeking": {
  		"Big5": "Extraversion",
  		"LowTerm": "平穏を求める",
  		"HighTerm": "興奮を求める",
  		"LowDescription": "穏やかで和める、安全な活動を好みます",
  		"HighDescription": "リスクを取ることで高揚し、忙しくないと退屈に感じます"
  	},
  	"Cheerfulness": {
  		"Big5": "Extraversion",
  		"LowTerm": "厳粛な",
  		"HighTerm": "快活な",
  		"LowDescription": "普段まじめで、あまり冗談を言いません",
  		"HighDescription": "喜びにあふれる人で、その喜びを周囲と分かち合います"
  	},
  	"Trust": {
  		"Big5": "Agreeableness",
  		"LowTerm": "用心深い",
  		"HighTerm": "人を信じる",
  		"LowDescription": "他人の意図を警戒し、容易に信用しません",
  		"HighDescription": "何においても人を信じ、容易に信頼します"
  	},
  	"Cooperation": {
  		"Big5": "Agreeableness",
  		"LowTerm": "固執する",
  		"HighTerm": "柔軟な",
  		"LowDescription": "他人と対立することに尻込みしません",
  		"HighDescription": "文句を言うような気難しさがなく、対立を回避しようとします"
  	},
  	"Altruism": {
  		"Big5": "Agreeableness",
  		"LowTerm": "自分本位な",
  		"HighTerm": "利他的な",
  		"LowDescription": "人のために時間を費やすよりも、自立的に自分のことを自分で行う傾向があります",
  		"HighDescription": "人を支援することに充実感を覚え、そのように尽力するでしょう"
  	},
  	"Morality": {
  		"Big5": "Agreeableness",
  		"LowTerm": "対面を気にしない",
  		"HighTerm": "名誉を尊重する",
  		"LowDescription": "自分が望むものを得るためにあらゆる手段を講じることを心地よく感じます",
  		"HighDescription": "他人を利用して成功するのは間違っていると考えます"
  	},
  	"Modesty": {
  		"Big5": "Agreeableness",
  		"LowTerm": "自己評価が高い",
  		"HighTerm": "謙虚な",
  		"LowDescription": "自分を高く評価しており、自分に満足しています",
  		"HighDescription": "注目されるのが苦手です"
  	},
  	"Sympathy": {
  		"Big5": "Agreeableness",
  		"LowTerm": "冷淡な",
  		"HighTerm": "感情移入する",
  		"LowDescription": "他人に頼るよりも、自分自身をもっと頼りにすべきだと考えるタイプです",
  		"HighDescription": "他人がどう感じるかを意識し、同情するタイプです"
  	},
  	"Self-efficacy": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "自分に自信が持てない",
  		"HighTerm": "自分に自信がある",
  		"LowDescription": "自分の目標達成能力をしばしば疑います",
  		"HighDescription": "始めたことを成し遂げる能力があると思っています"
  	},
  	"Orderliness": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "自由奔放な",
  		"HighTerm": "几帳面な",
  		"LowDescription": "毎日の生活の中で組織のためには多くの時間を割きません",
  		"HighDescription": "規則正しい生活を強く望んでいます"
  	},
  	"Dutifulness": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "無頓着な",
  		"HighTerm": "本分を守る",
  		"LowDescription": "ルールや義務を無視してやりたいことをやります",
  		"HighDescription": "ルールや義務が不便であっても真摯に受け止めます"
  	},
  	"Achievement-striving": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "現状に満足している",
  		"HighTerm": "やる気がある",
  		"LowDescription": "自身の達成レベルに満足していて、大胆な目標を設定する必要を感じていません",
  		"HighDescription": "自分自身に高い目標を持ち、それを達成するために熱心に取り組みます"
  	},
  	"Self-discipline": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "集中が途切れる",
  		"HighTerm": "粘り強い",
  		"LowDescription": "長期間にわたって困難な仕事に取り組みつづけることがなかなかできません",
  		"HighDescription": "困難な仕事に取り組み続けることができます"
  	},
  	"Cautiousness": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "大胆な",
  		"HighTerm": "慎重な",
  		"LowDescription": "時間をかけて慎重に検討するよりもむしろ即座に行動を起こします",
  		"HighDescription": "意思決定する前に注意深く考えます"
  	},
  	"Anxiety": {
  		"Big5": "Neuroticism",
  		"LowTerm": "自分に自信がある",
  		"HighTerm": "心配しがちな",
  		"LowDescription": "冷静で自信があるように感じる傾向があります",
  		"HighDescription": "起こるかもしれないことについて心配する傾向があります"
  	},
  	"Anger": {
  		"Big5": "Neuroticism",
  		"LowTerm": "温和な",
  		"HighTerm": "熱しやすい",
  		"LowDescription": "滅多に怒りません",
  		"HighDescription": "特に物事があなたの考えるとおりに行かないときにかっとなる性格です"
  	},
  	"Depression": {
  		"Big5": "Neuroticism",
  		"LowTerm": "現状に満足している",
  		"HighTerm": "沈みがちな",
  		"LowDescription": "概してあなた自身に満足しています",
  		"HighDescription": "不満に思うことについて常に考えてしまいます"
  	},
  	"Self-consciousness": {
  		"Big5": "Neuroticism",
  		"LowTerm": "確信を持って行動する",
  		"HighTerm": "人目を気にする",
  		"LowDescription": "困難を感じたりせず、大抵の場合自信に満ちています",
  		"HighDescription": "人からどう思われているかについて神経質になっています"
  	},
  	"Immoderation": {
  		"Big5": "Neuroticism",
  		"LowTerm": "自制心がある",
  		"HighTerm": "快楽主義な",
  		"LowDescription": "自分の欲望をコントロールできますし、強烈な欲望を持ちません",
  		"HighDescription": "強い欲求を持っており、それに惑わされます"
  	},
  	"Vulnerability": {
  		"Big5": "Neuroticism",
  		"LowTerm": "圧力を受けても冷静な",
  		"HighTerm": "ストレスの影響を受けやすい",
  		"LowDescription": "冷静で、予期しない出来事にも効果的に対処します",
  		"HighDescription": "ストレスの多い状況下で精神的に押しつぶされ易い傾向があります"
  	},
  	"Imagination": {
  		"Big5": "Openness",
  		"LowTerm": "堅実な",
  		"HighTerm": "創意に富んでいる",
  		"LowDescription": "思い付きよりも事実を選びます",
  		"HighDescription": "想像力豊かです"
  	},
  	"Artistic-interests": {
  		"Big5": "Openness",
  		"LowTerm": "芸術に無関心な",
  		"HighTerm": "芸術への理解がある",
  		"LowDescription": "我々が調査した人々と比べると、芸術や創作活動にあまり関心がないようです",
  		"HighDescription": "美を楽しみ、創造的な経験を追求します"
  	},
  	"Emotionality": {
  		"Big5": "Openness",
  		"LowTerm": "感情に流されない",
  		"HighTerm": "情緒的な",
  		"LowDescription": "自分の感情についてしきりに考えたり、感情をおおっぴらに表すことはありません",
  		"HighDescription": "自分の感情を自覚していて、どう表現すれば良いかわかっています"
  	},
  	"Adventurousness": {
  		"Big5": "Openness",
  		"LowTerm": "安定している",
  		"HighTerm": "冒険的な",
  		"LowDescription": "いつもの習慣や日課を好み、そこから逸脱することを望みません",
  		"HighDescription": "新しい経験をすることを熱望しています"
  	},
  	"Intellect": {
  		"Big5": "Openness",
  		"LowTerm": "現実的な",
  		"HighTerm": "哲学的な",
  		"LowDescription": "抽象的なアイディアや新しい発想にはあまり目を向けず、現状の世の中にうまく対応していくことを好みます",
  		"HighDescription": "新しいアイディアに興味をそそられ、進んで受け入れ、探求することを好みます"
  	},
  	"Liberalism": {
  		"Big5": "Openness",
  		"LowTerm": "権威を尊重する",
  		"HighTerm": "権威に挑む",
  		"LowDescription": "安定感を大切にし、伝統に従うことを好みます",
  		"HighDescription": "権威や伝統を守るよりも、より良い方向へ変化させる方が良いと考えます"
  	}
  },
  "needs": {
      "Challenge": [
          "名声",
          "競争",
          "栄光"
      ],
      "Closeness": [
          "帰属",
          "郷愁",
          "親密さ"
      ],
      "Curiosity": [
          "発見",
          "専門性",
          "知識獲得"
      ],
      "Excitement": [
          "お祭り騒ぎ",
          "期待",
          "うきうきした気分"
      ],
      "Harmony": [
          "幸福",
          "礼儀",
          "丁寧さ"
      ],
      "Ideal": [
          "洗練",
          "崇高さ",
          "優越感",
          "満足感"
      ],
      "Liberty": [
          "現代性",
          "可能性拡大",
          "束縛脱出",
          "自発性",
          "斬新さ"
      ],
      "Love": [
          "つながり",
          "親近感"
      ],
      "Practicality": [
          "効率",
          "実用性",
          "高価値",
          "利便性"
      ],
      "Self-expression": [
          "自己表現",
          "自己啓発",
          "個人的強み"
      ],
      "Stability": [
          "安定",
          "信憑性",
          "信用性"
      ],
      "Structure": [
          "組織への帰属",
          "率直さ",
          "明瞭さ",
          "信頼性"
      ]
  },
  "phrases": {
    "You are %s": "%sタイプです",
    "You are %s and %s": "%sタイプであり、また%sタイプです",
    "You are %s, %s and %s": "%sタイプであり、%sタイプであり、また%sタイプです",
    "And you are %s": "また、%sタイプです",
    "You are relatively unconcerned with %s": "%sにはあまりこだわりません",
    "You are relatively unconcerned with both %s and %s": "%sと%sの両方にあまりこだわりません",
    "You don't find %s to be particularly motivating for you": "%sには特に関心がありません",
    "You don't find either %s or %s to be particularly motivating for you": "%s、%sのいずれも関心がありません",
    "You value both %s a bit": "両方の%sを少し評価します",
    "You value both %s and %s a bit": "%s と%sの両方が少しばかり有用と考えています",
    "You consider %s to guide a large part of what you do" : "%sがあなたの行動に大きな影響を与えています",
    "You consider both %s and %s to guide a large part of what you do" : "方針を決める際に%sと%sの両方を重要とみなします",
    "And %s": "また%s",
    "You value %s a bit more": "%sを多少有用だと考えています",
    "Experiences that make you feel high %s are generally unappealing to you": "気分が高揚する経験の%sには慨して魅力を感じません",
    "Experiences that give a sense of %s hold some appeal to you": "%sを感じられる体験に魅力を感じます",
    "You are motivated to seek out experiences that provide a strong feeling of %s": "%sにつながる体験を好みます",
    "Your choices are driven by a desire for %s" : "%sを意識して意思決定するタイプです",
    "a bit %s": "少し%s",
    "somewhat %s" : "多少%s",
    "can be perceived as %s": "%s人と思われるかもしれない"
  },
  "traits": {
      "Agreeableness_minus_Conscientiousness_minus": [
          {
              "perceived_negatively": true,
              "word": "猪突猛進な"
          },
          {
              "perceived_negatively": true,
              "word": "儀礼にこだわらない、単刀直入な"
          },
          {
              "perceived_negatively": true,
              "word": "全面的には信頼しない"
          },
          {
              "perceived_negatively": true,
              "word": "安易に協調せず、自分の信念を貫く"
          },
          {
              "perceived_negatively": true,
              "word": "議論より実践の"
          }
      ],
      "Agreeableness_minus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "忠実な"
          },
          {
              "perceived_negatively": false,
              "word": "剛直な"
          },
          {
              "perceived_negatively": true,
              "word": "厳格な"
          }
      ],
      "Agreeableness_minus_Extraversion_minus": [
          {
              "perceived_negatively": true,
              "word": "斜に構えた"
          },
          {
              "perceived_negatively": true,
              "word": "人に用心深い"
          },
          {
              "perceived_negatively": true,
              "word": "引っ込み思案な"
          },
          {
              "perceived_negatively": true,
              "word": "私心がない"
          },
          {
              "perceived_negatively": true,
              "word": "客観的な"
          },
          {
              "perceived_negatively": true,
              "word": "心配そうな"
          }
      ],
      "Agreeableness_minus_Extraversion_plus": [
          {
              "perceived_negatively": true,
              "word": "頑固な"
          },
          {
              "perceived_negatively": true,
              "word": "飛躍が多い"
          },
          {
              "perceived_negatively": true,
              "word": "荒削りな"
          },
          {
              "perceived_negatively": true,
              "word": "好戦的な"
          },
          {
              "perceived_negatively": true,
              "word": "大まかな"
          },
          {
              "perceived_negatively": false,
              "word": "ちゃめっ気のある"
          },
          {
              "perceived_negatively": true,
              "word": "巧みな"
          },
          {
              "perceived_negatively": true,
              "word": "飾り気のない"
          },
          {
              "perceived_negatively": true,
              "word": "疑われやすい"
          }
      ],
      "Agreeableness_minus_Neuroticism_minus": [
          {
              "perceived_negatively": true,
              "word": "気配りが苦手な"
          },
          {
              "perceived_negatively": true,
              "word": "よそよそしい"
          },
          {
              "perceived_negatively": true,
              "word": "冷静な"
          },
          {
              "perceived_negatively": true,
              "word": "感情に流されない"
          }
      ],
      "Agreeableness_minus_Neuroticism_plus": [
          {
              "perceived_negatively": true,
              "word": "批判的な"
          },
          {
              "perceived_negatively": true,
              "word": "利己的な"
          },
          {
              "perceived_negatively": true,
              "word": "怒りっぽい"
          },
          {
              "perceived_negatively": true,
              "word": "対立する"
          },
          {
              "perceived_negatively": true,
              "word": "ご機嫌斜めの"
          },
          {
              "perceived_negatively": true,
              "word": "厳しい"
          },
          {
              "perceived_negatively": true,
              "word": "社交が苦手な"
          },
          {
              "perceived_negatively": true,
              "word": "人に要求しがちな"
          }
      ],
      "Agreeableness_minus_Openness_minus": [
          {
              "perceived_negatively": true,
              "word": "大雑把な"
          },
          {
              "perceived_negatively": true,
              "word": "機転の利かない"
          },
          {
              "perceived_negatively": true,
              "word": "素っ気ない"
          },
          {
              "perceived_negatively": true,
              "word": "心にゆとりがない"
          },
          {
              "perceived_negatively": true,
              "word": "情にほだされない"
          },
          {
              "perceived_negatively": true,
              "word": "断固とした"
          },
          {
              "perceived_negatively": true,
              "word": "手加減できない"
          },
          {
              "perceived_negatively": true,
              "word": "執念深い"
          }
      ],
      "Agreeableness_minus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "鋭敏な"
          },
          {
              "perceived_negatively": false,
              "word": "風変わりな"
          },
          {
              "perceived_negatively": false,
              "word": "個性的な"
          }
      ],
      "Agreeableness_plus_Conscientiousness_minus": [
          {
              "perceived_negatively": false,
              "word": "控えめな"
          },
          {
              "perceived_negatively": false,
              "word": "でしゃばらない"
          }
      ],
      "Agreeableness_plus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "役立つ"
          },
          {
              "perceived_negatively": false,
              "word": "協力的な"
          },
          {
              "perceived_negatively": false,
              "word": "思いやりのある"
          },
          {
              "perceived_negatively": false,
              "word": "礼儀正しい"
          },
          {
              "perceived_negatively": false,
              "word": "丁寧な"
          },
          {
              "perceived_negatively": false,
              "word": "道理をわきまえる"
          },
          {
              "perceived_negatively": false,
              "word": "丁重な"
          },
          {
              "perceived_negatively": false,
              "word": "思慮深い"
          },
          {
              "perceived_negatively": false,
              "word": "忠実な"
          },
          {
              "perceived_negatively": false,
              "word": "モラルがある"
          }
      ],
      "Agreeableness_plus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "心が優しい"
          },
          {
              "perceived_negatively": false,
              "word": "快い"
          },
          {
              "perceived_negatively": false,
              "word": "好意的な"
          },
          {
              "perceived_negatively": false,
              "word": "控えめな"
          },
          {
              "perceived_negatively": true,
              "word": "慈悲深い"
          }
      ],
      "Agreeableness_plus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "はしゃぐ"
          },
          {
              "perceived_negatively": false,
              "word": "幸福そうな"
          },
          {
              "perceived_negatively": false,
              "word": "親しみやすい"
          },
          {
              "perceived_negatively": false,
              "word": "面白い"
          },
          {
              "perceived_negatively": false,
              "word": "陽気な"
          },
          {
              "perceived_negatively": false,
              "word": "ユーモアがある"
          }
      ],
      "Agreeableness_plus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "寛大な"
          },
          {
              "perceived_negatively": false,
              "word": "愉快な"
          },
          {
              "perceived_negatively": false,
              "word": "寛容な"
          },
          {
              "perceived_negatively": false,
              "word": "平和的な"
          },
          {
              "perceived_negatively": false,
              "word": "柔軟な"
          },
          {
              "perceived_negatively": false,
              "word": "気楽な"
          },
          {
              "perceived_negatively": false,
              "word": "フェアな"
          },
          {
              "perceived_negatively": false,
              "word": "慈悲深い"
          },
          {
              "perceived_negatively": false,
              "word": "信じやすい"
          }
      ],
      "Agreeableness_plus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "情にもろい"
          },
          {
              "perceived_negatively": false,
              "word": "優しい"
          },
          {
              "perceived_negatively": false,
              "word": "活気にあふれる"
          },
          {
              "perceived_negatively": false,
              "word": "柔和な"
          },
          {
              "perceived_negatively": false,
              "word": "情熱的"
          },
          {
              "perceived_negatively": false,
              "word": "ロマンチストの"
          }
      ],
      "Agreeableness_plus_Openness_minus": [
          {
              "perceived_negatively": true,
              "word": "人に頼りがちな"
          },
          {
              "perceived_negatively": true,
              "word": "簡素好きな"
          }
      ],
      "Agreeableness_plus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "愛想の良い"
          },
          {
              "perceived_negatively": false,
              "word": "如才ない"
          },
          {
              "perceived_negatively": false,
              "word": "駆引きがうまい"
          },
          {
              "perceived_negatively": false,
              "word": "深みがある"
          },
          {
              "perceived_negatively": false,
              "word": "理想家の"
          }
      ],
      "Conscientiousness_minus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "気が早い"
          },
          {
              "perceived_negatively": true,
              "word": "安易に協調せず、自分の信念を貫く"
          },
          {
              "perceived_negatively": true,
              "word": "頼りない"
          },
          {
              "perceived_negatively": true,
              "word": "全面的には信頼しない"
          },
          {
              "perceived_negatively": true,
              "word": "議論より実践の"
          }
      ],
      "Conscientiousness_minus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "控えめ"
          },
          {
              "perceived_negatively": false,
              "word": "でしゃばらない"
          }
      ],
      "Conscientiousness_minus_Extraversion_minus": [
          {
              "perceived_negatively": true,
              "word": "優柔不断な"
          },
          {
              "perceived_negatively": true,
              "word": "目的がない"
          },
          {
              "perceived_negatively": false,
              "word": "気が抜けている"
          },
          {
              "perceived_negatively": false,
              "word": "当り障りがない"
          },
          {
              "perceived_negatively": true,
              "word": "野心的でない"
          }
      ],
      "Conscientiousness_minus_Extraversion_plus": [
          {
              "perceived_negatively": true,
              "word": "気ままな"
          },
          {
              "perceived_negatively": false,
              "word": "ひどく陽気な"
          },
          {
              "perceived_negatively": true,
              "word": "向こう見ずな"
          },
          {
              "perceived_negatively": true,
              "word": "がむしゃらな"
          },
          {
              "perceived_negatively": false,
              "word": "感情を表に出す"
          }
      ],
      "Conscientiousness_minus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "形式張らない"
          },
          {
              "perceived_negatively": false,
              "word": "地味な"
          }
      ],
      "Conscientiousness_minus_Neuroticism_plus": [
          {
              "perceived_negatively": true,
              "word": "ぼーっとしてる"
          },
          {
              "perceived_negatively": true,
              "word": "臨機応変な"
          },
          {
              "perceived_negatively": true,
              "word": "風変わりな"
          },
          {
              "perceived_negatively": true,
              "word": "忘れっぽい"
          },
          {
              "perceived_negatively": true,
              "word": "衝動的な"
          },
          {
              "perceived_negatively": true,
              "word": "勝手気ままな"
          }
      ],
      "Conscientiousness_minus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "型破りな"
          },
          {
              "perceived_negatively": true,
              "word": "理屈に拘らない"
          },
          {
              "perceived_negatively": true,
              "word": "子どもっぽい"
          },
          {
              "perceived_negatively": true,
              "word": "ぶっつけ本番、出たとこ勝負の"
          },
          {
              "perceived_negatively": false,
              "word": "曖昧な"
          },
          {
              "perceived_negatively": true,
              "word": "浮ついたところのある"
          }
      ],
      "Conscientiousness_minus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "慣例にとらわれない"
          },
          {
              "perceived_negatively": false,
              "word": "奇抜な"
          }
      ],
      "Conscientiousness_plus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "厳格な"
          },
          {
              "perceived_negatively": false,
              "word": "忠実な"
          },
          {
              "perceived_negatively": false,
              "word": "剛直な"
          }
      ],
      "Conscientiousness_plus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "頼りになる"
          },
          {
              "perceived_negatively": false,
              "word": "責任感がある"
          },
          {
              "perceived_negatively": false,
              "word": "信頼できる"
          },
          {
              "perceived_negatively": false,
              "word": "礼儀正しい"
          },
          {
              "perceived_negatively": false,
              "word": "思いやりのある"
          }
      ],
      "Conscientiousness_plus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "用心深い"
          },
          {
              "perceived_negatively": false,
              "word": "自信のある"
          },
          {
              "perceived_negatively": false,
              "word": "時間厳守する"
          },
          {
              "perceived_negatively": false,
              "word": "儀礼的な"
          },
          {
              "perceived_negatively": false,
              "word": "やりくりがうまい"
          },
          {
              "perceived_negatively": false,
              "word": "信念を持ってる"
          }
      ],
      "Conscientiousness_plus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "意欲的な"
          },
          {
              "perceived_negatively": false,
              "word": "注意深い"
          },
          {
              "perceived_negatively": false,
              "word": "堅固な"
          },
          {
              "perceived_negatively": false,
              "word": "決断力がある"
          },
          {
              "perceived_negatively": false,
              "word": "競争力がある"
          }
      ],
      "Conscientiousness_plus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "徹底している"
          },
          {
              "perceived_negatively": false,
              "word": "着実な"
          },
          {
              "perceived_negatively": false,
              "word": "一貫している"
          },
          {
              "perceived_negatively": false,
              "word": "自制力がある"
          },
          {
              "perceived_negatively": false,
              "word": "論理的"
          },
          {
              "perceived_negatively": false,
              "word": "決定力のある"
          },
          {
              "perceived_negatively": false,
              "word": "統制された"
          },
          {
              "perceived_negatively": false,
              "word": "簡潔な"
          }
      ],
      "Conscientiousness_plus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "独特な"
          },
          {
              "perceived_negatively": true,
              "word": "緊張しがちな"
          }
      ],
      "Conscientiousness_plus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "伝統を守る"
          },
          {
              "perceived_negatively": false,
              "word": "慣習を重んじる"
          }
      ],
      "Conscientiousness_plus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "洗練されている"
          },
          {
              "perceived_negatively": false,
              "word": "完璧を追求する"
          },
          {
              "perceived_negatively": false,
              "word": "勤勉な"
          },
          {
              "perceived_negatively": false,
              "word": "品位がある"
          },
          {
              "perceived_negatively": false,
              "word": "上品な"
          },
          {
              "perceived_negatively": false,
              "word": "教養がある"
          },
          {
              "perceived_negatively": false,
              "word": "先見の明のある"
          }
      ],
      "Extraversion_minus_Agreeableness_minus": [
          {
              "perceived_negatively": false,
              "word": "物事に懐疑的な"
          },
          {
              "perceived_negatively": false,
              "word": "人に用心深い"
          },
          {
              "perceived_negatively": true,
              "word": "引っ込み思案な"
          },
          {
              "perceived_negatively": true,
              "word": "無口な"
          },
          {
              "perceived_negatively": true,
              "word": "社交が苦手な"
          },
          {
              "perceived_negatively": true,
              "word": "心配そうな"
          },
          {
              "perceived_negatively": true,
              "word": "私心がない"
          },
          {
              "perceived_negatively": false,
              "word": "超然とした"
          }
      ],
      "Extraversion_minus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "非攻撃的な"
          },
          {
              "perceived_negatively": false,
              "word": "控えめな"
          },
          {
              "perceived_negatively": false,
              "word": "素直に対応する"
          },
          {
              "perceived_negatively": false,
              "word": "気が小さい"
          },
          {
              "perceived_negatively": false,
              "word": "適合力のある"
          },
          {
              "perceived_negatively": false,
              "word": "単純な"
          }
      ],
      "Extraversion_minus_Conscientiousness_minus": [
          {
              "perceived_negatively": true,
              "word": "鵜呑みにしない"
          },
          {
              "perceived_negatively": true,
              "word": "精力的でない"
          },
          {
              "perceived_negatively": true,
              "word": "対応がゆっくりな"
          },
          {
              "perceived_negatively": true,
              "word": "持続力に欠ける"
          },
          {
              "perceived_negatively": true,
              "word": "あやふやな"
          }
      ],
      "Extraversion_minus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "節度がある"
          },
          {
              "perceived_negatively": false,
              "word": "まじめな"
          },
          {
              "perceived_negatively": false,
              "word": "慎重な"
          },
          {
              "perceived_negatively": false,
              "word": "用心深い"
          },
          {
              "perceived_negatively": false,
              "word": "信念を持ってる"
          }
      ],
      "Extraversion_minus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "物静かな"
          },
          {
              "perceived_negatively": false,
              "word": "落ち着いている"
          },
          {
              "perceived_negatively": false,
              "word": "穏やかな"
          },
          {
              "perceived_negatively": false,
              "word": "偏見がない"
          },
          {
              "perceived_negatively": false,
              "word": "高ぶらない"
          },
          {
              "perceived_negatively": false,
              "word": "素直な"
          }
      ],
      "Extraversion_minus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "ガードが堅い"
          },
          {
              "perceived_negatively": false,
              "word": "悲観的な"
          },
          {
              "perceived_negatively": false,
              "word": "隠したがる"
          },
          {
              "perceived_negatively": true,
              "word": "気の小さい"
          },
          {
              "perceived_negatively": false,
              "word": "隠したがる"
          }
      ],
      "Extraversion_minus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "気分が沈みがちな"
          },
          {
              "perceived_negatively": true,
              "word": "おとなしい"
          },
          {
              "perceived_negatively": true,
              "word": "冒険を好まない"
          },
          {
              "perceived_negatively": false,
              "word": "受け身な"
          },
          {
              "perceived_negatively": true,
              "word": "何事にも関心を持たない"
          },
          {
              "perceived_negatively": false,
              "word": "素直な"
          }
      ],
      "Extraversion_minus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "内部志向型な"
          },
          {
              "perceived_negatively": false,
              "word": "内省的な"
          },
          {
              "perceived_negatively": false,
              "word": "よく瞑想にふける"
          },
          {
              "perceived_negatively": false,
              "word": "熟考する"
          },
          {
              "perceived_negatively": false,
              "word": "自省する"
          }
      ],
      "Extraversion_plus_Agreeableness_minus": [
          {
              "perceived_negatively": false,
              "word": "自説を曲げない"
          },
          {
              "perceived_negatively": true,
              "word": "強引なところがある"
          },
          {
              "perceived_negatively": true,
              "word": "支配力を追い求める"
          },
          {
              "perceived_negatively": true,
              "word": "自慢好きな"
          },
          {
              "perceived_negatively": true,
              "word": "親分風の"
          },
          {
              "perceived_negatively": false,
              "word": "支配的な"
          },
          {
              "perceived_negatively": false,
              "word": "抜け目のない"
          }
      ],
      "Extraversion_plus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "社会的な"
          },
          {
              "perceived_negatively": false,
              "word": "精力的な"
          },
          {
              "perceived_negatively": false,
              "word": "熱中しやすい"
          },
          {
              "perceived_negatively": false,
              "word": "おしゃべり好きな"
          },
          {
              "perceived_negatively": false,
              "word": "敏感な"
          },
          {
              "perceived_negatively": false,
              "word": "元気な"
          },
          {
              "perceived_negatively": false,
              "word": "人をひきつける"
          },
          {
              "perceived_negatively": false,
              "word": "何事にも熱心な"
          }
      ],
      "Extraversion_plus_Conscientiousness_minus": [
          {
              "perceived_negatively": false,
              "word": "ひどく陽気な"
          },
          {
              "perceived_negatively": false,
              "word": "いたずら好きな"
          },
          {
              "perceived_negatively": false,
              "word": "自己の主張に強い信念をもっている"
          },
          {
              "perceived_negatively": false,
              "word": "社交的な"
          },
          {
              "perceived_negatively": false,
              "word": "感情を表に出す"
          }
      ],
      "Extraversion_plus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "活発な"
          },
          {
              "perceived_negatively": false,
              "word": "競争力がある"
          },
          {
              "perceived_negatively": false,
              "word": "粘り強い"
          },
          {
              "perceived_negatively": false,
              "word": "意欲的な"
          },
          {
              "perceived_negatively": false,
              "word": "決断力がある"
          }
      ],
      "Extraversion_plus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "自信のある"
          },
          {
              "perceived_negatively": false,
              "word": "大胆な"
          },
          {
              "perceived_negatively": false,
              "word": "確信を持った"
          },
          {
              "perceived_negatively": false,
              "word": "単刀直入な"
          },
          {
              "perceived_negatively": false,
              "word": "精神的に強い"
          },
          {
              "perceived_negatively": false,
              "word": "困難に立ち向かう"
          },
          {
              "perceived_negatively": false,
              "word": "自己に満足している"
          },
          {
              "perceived_negatively": false,
              "word": "元気いっぱいな"
          },
          {
              "perceived_negatively": false,
              "word": "たくましい"
          }
      ],
      "Extraversion_plus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "熱くなりやすい"
          },
          {
              "perceived_negatively": true,
              "word": "言葉が多い"
          },
          {
              "perceived_negatively": false,
              "word": "ひどく気前が良い"
          },
          {
              "perceived_negatively": true,
              "word": "気まぐれな"
          },
          {
              "perceived_negatively": false,
              "word": "異性の気を引こうとする"
          }
      ],
      "Extraversion_plus_Openness_minus": [
          {
              "perceived_negatively": true,
              "word": "言葉数が多い"
          },
          {
              "perceived_negatively": true,
              "word": "めんどくさがりな"
          },
          {
              "perceived_negatively": true,
              "word": "気取った"
          }
      ],
      "Extraversion_plus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "表現に富む"
          },
          {
              "perceived_negatively": false,
              "word": "率直な"
          },
          {
              "perceived_negatively": false,
              "word": "ドラマティックな"
          },
          {
              "perceived_negatively": false,
              "word": "自発的な"
          },
          {
              "perceived_negatively": false,
              "word": "機知に富んでいる"
          },
          {
              "perceived_negatively": false,
              "word": "機を見るに敏な"
          },
          {
              "perceived_negatively": false,
              "word": "自立している"
          }
      ],
      "Neuroticism_minus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "感情に流されない"
          },
          {
              "perceived_negatively": true,
              "word": "気配りが苦手な"
          },
          {
              "perceived_negatively": true,
              "word": "よそよそしい"
          },
          {
              "perceived_negatively": true,
              "word": "冷静な"
          }
      ],
      "Neuroticism_minus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "忍耐強い"
          },
          {
              "perceived_negatively": false,
              "word": "リラックスしている"
          },
          {
              "perceived_negatively": false,
              "word": "多くを要求しない"
          },
          {
              "perceived_negatively": false,
              "word": "現実的な"
          },
          {
              "perceived_negatively": false,
              "word": "楽観的な"
          },
          {
              "perceived_negatively": false,
              "word": "思いやりのある"
          },
          {
              "perceived_negatively": false,
              "word": "批判することを遠慮する"
          },
          {
              "perceived_negatively": false,
              "word": "控えめ"
          }
      ],
      "Neuroticism_minus_Conscientiousness_minus": [
          {
              "perceived_negatively": false,
              "word": "形式張らない"
          },
          {
              "perceived_negatively": false,
              "word": "地味な"
          }
      ],
      "Neuroticism_minus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "合理的な"
          },
          {
              "perceived_negatively": false,
              "word": "公平な"
          },
          {
              "perceived_negatively": false,
              "word": "着実な"
          },
          {
              "perceived_negatively": false,
              "word": "論理的"
          },
          {
              "perceived_negatively": false,
              "word": "決定力のある"
          },
          {
              "perceived_negatively": false,
              "word": "落ち着いている"
          },
          {
              "perceived_negatively": false,
              "word": "簡潔な"
          },
          {
              "perceived_negatively": false,
              "word": "徹底している"
          },
          {
              "perceived_negatively": false,
              "word": "経済的な"
          },
          {
              "perceived_negatively": false,
              "word": "自制力がある"
          }
      ],
      "Neuroticism_minus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "高ぶらない"
          },
          {
              "perceived_negatively": true,
              "word": "興奮しない"
          },
          {
              "perceived_negatively": false,
              "word": "穏やかな"
          },
          {
              "perceived_negatively": false,
              "word": "物静かな"
          }
      ],
      "Neuroticism_minus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "気取らない"
          },
          {
              "perceived_negatively": false,
              "word": "物事に飽きない"
          },
          {
              "perceived_negatively": false,
              "word": "不屈な"
          }
      ],
      "Neuroticism_minus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "沈着な"
          },
          {
              "perceived_negatively": true,
              "word": "気配りが苦手な"
          }
      ],
      "Neuroticism_minus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "情に厚い"
          },
          {
              "perceived_negatively": false,
              "word": "多芸な"
          },
          {
              "perceived_negatively": false,
              "word": "創造的な"
          },
          {
              "perceived_negatively": false,
              "word": "知的な"
          },
          {
              "perceived_negatively": false,
              "word": "洞察力がある"
          }
      ],
      "Neuroticism_plus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "気まぐれな"
          },
          {
              "perceived_negatively": true,
              "word": "熱くなりやすい"
          },
          {
              "perceived_negatively": true,
              "word": "口論好きの"
          },
          {
              "perceived_negatively": true,
              "word": "性急な"
          },
          {
              "perceived_negatively": true,
              "word": "ご機嫌斜めの"
          },
          {
              "perceived_negatively": true,
              "word": "怒りっぽい"
          },
          {
              "perceived_negatively": true,
              "word": "奇妙な"
          }
      ],
      "Neuroticism_plus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "情緒的な"
          },
          {
              "perceived_negatively": true,
              "word": "疑うことを知らない"
          },
          {
              "perceived_negatively": false,
              "word": "優しい"
          },
          {
              "perceived_negatively": false,
              "word": "敏感な"
          },
          {
              "perceived_negatively": false,
              "word": "柔和な"
          }
      ],
      "Neuroticism_plus_Conscientiousness_minus": [
          {
              "perceived_negatively": true,
              "word": "何かをせずにいられない"
          },
          {
              "perceived_negatively": true,
              "word": "おせっかいな"
          },
          {
              "perceived_negatively": true,
              "word": "気ままな"
          },
          {
              "perceived_negatively": true,
              "word": "忘れやすい"
          },
          {
              "perceived_negatively": true,
              "word": "衝動的な"
          }
      ],
      "Neuroticism_plus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "独特な"
          },
          {
              "perceived_negatively": true,
              "word": "神経質な"
          }
      ],
      "Neuroticism_plus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "ガードが堅い"
          },
          {
              "perceived_negatively": true,
              "word": "いらいらしやすい"
          },
          {
              "perceived_negatively": true,
              "word": "自分に確信が持てない"
          },
          {
              "perceived_negatively": true,
              "word": "悲観的な"
          },
          {
              "perceived_negatively": false,
              "word": "秘密にしたがる"
          },
          {
              "perceived_negatively": true,
              "word": "心配性の"
          },
          {
              "perceived_negatively": true,
              "word": "ものごとを否定的に捉える"
          },
          {
              "perceived_negatively": false,
              "word": "自分に厳しい"
          }
      ],
      "Neuroticism_plus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "興奮しやすい"
          },
          {
              "perceived_negatively": true,
              "word": "言葉が多い"
          },
          {
              "perceived_negatively": false,
              "word": "異性の気を引こうとする"
          },
          {
              "perceived_negatively": true,
              "word": "熱くなりやすい"
          },
          {
              "perceived_negatively": false,
              "word": "ひどく気前が良い"
          },
          {
              "perceived_negatively": true,
              "word": "移り気な"
          }
      ],
      "Neuroticism_plus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "すぐに慌ててしまう"
          },
          {
              "perceived_negatively": false,
              "word": "つい腹を立てやすい"
          },
          {
              "perceived_negatively": false,
              "word": "気遣う"
          }
      ],
      "Neuroticism_plus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "興奮しやすい"
          },
          {
              "perceived_negatively": false,
              "word": "情熱的"
          },
          {
              "perceived_negatively": false,
              "word": "肉感的な"
          }
      ],
      "Openness_minus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "大雑把な"
          },
          {
              "perceived_negatively": true,
              "word": "機転の利かない"
          },
          {
              "perceived_negatively": true,
              "word": "素っ気ない"
          },
          {
              "perceived_negatively": true,
              "word": "心にゆとりがない"
          },
          {
              "perceived_negatively": true,
              "word": "情にほだされない"
          }
      ],
      "Openness_minus_Agreeableness_plus": [
          {
              "perceived_negatively": true,
              "word": "簡素好きな"
          },
          {
              "perceived_negatively": true,
              "word": "人に頼りがちなの"
          }
      ],
      "Openness_minus_Conscientiousness_minus": [
          {
              "perceived_negatively": true,
              "word": "目の前のことに専念する"
          },
          {
              "perceived_negatively": false,
              "word": "型破りな"
          },
          {
              "perceived_negatively": true,
              "word": "理屈に拘らない"
          },
          {
              "perceived_negatively": true,
              "word": "子どもっぽい"
          },
          {
              "perceived_negatively": true,
              "word": "ぶっつけ本番、出たとこ勝負の"
          },
          {
              "perceived_negatively": false,
              "word": "曖昧な"
          },
          {
              "perceived_negatively": true,
              "word": "浮ついたところのある"
          }
      ],
      "Openness_minus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "慣習を重んじる"
          },
          {
              "perceived_negatively": false,
              "word": "伝統を守る"
          }
      ],
      "Openness_minus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "平均的な"
          },
          {
              "perceived_negatively": true,
              "word": "いたって普通な"
          },
          {
              "perceived_negatively": false,
              "word": "気分が沈みがちな"
          },
          {
              "perceived_negatively": true,
              "word": "何事にも関心を持たない"
          },
          {
              "perceived_negatively": true,
              "word": "冒険を好まない"
          }
      ],
      "Openness_minus_Extraversion_plus": [
          {
              "perceived_negatively": true,
              "word": "言葉数が多い"
          },
          {
              "perceived_negatively": true,
              "word": "めんどくさがりな"
          },
          {
              "perceived_negatively": true,
              "word": "気取った"
          }
      ],
      "Openness_minus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "沈着な"
          },
          {
              "perceived_negatively": true,
              "word": "気配りが苦手な"
          }
      ],
      "Openness_minus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "すぐに慌ててしまう"
          },
          {
              "perceived_negatively": false,
              "word": "つい腹を立てやすい"
          },
          {
              "perceived_negatively": false,
              "word": "気遣う"
          }
      ],
      "Openness_plus_Agreeableness_minus": [
          {
              "perceived_negatively": false,
              "word": "鋭敏な"
          },
          {
              "perceived_negatively": false,
              "word": "変わった"
          },
          {
              "perceived_negatively": false,
              "word": "個性的な"
          }
      ],
      "Openness_plus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "理想家の"
          },
          {
              "perceived_negatively": false,
              "word": "駆引きがうまい"
          },
          {
              "perceived_negatively": false,
              "word": "深みがある"
          },
          {
              "perceived_negatively": false,
              "word": "如才ない"
          },
          {
              "perceived_negatively": false,
              "word": "愛想の良い"
          }
      ],
      "Openness_plus_Conscientiousness_minus": [
          {
              "perceived_negatively": false,
              "word": "慣例にとらわれない"
          },
          {
              "perceived_negatively": false,
              "word": "奇抜な"
          }
      ],
      "Openness_plus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "分析好きな"
          },
          {
              "perceived_negatively": false,
              "word": "明敏な"
          },
          {
              "perceived_negatively": false,
              "word": "物知りな"
          },
          {
              "perceived_negatively": false,
              "word": "明確に述べる"
          },
          {
              "perceived_negatively": false,
              "word": "品位がある"
          },
          {
              "perceived_negatively": false,
              "word": "教養がある"
          }
      ],
      "Openness_plus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "内省的な"
          },
          {
              "perceived_negatively": false,
              "word": "よく瞑想にふける"
          },
          {
              "perceived_negatively": false,
              "word": "熟考する"
          },
          {
              "perceived_negatively": false,
              "word": "自省する"
          },
          {
              "perceived_negatively": false,
              "word": "内部志向型な"
          }
      ],
      "Openness_plus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "世知に長けた"
          },
          {
              "perceived_negatively": false,
              "word": "劇場的な"
          },
          {
              "perceived_negatively": false,
              "word": "雄弁な"
          },
          {
              "perceived_negatively": false,
              "word": "探究的な"
          },
          {
              "perceived_negatively": false,
              "word": "情熱的な"
          }
      ],
      "Openness_plus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "創造的な"
          },
          {
              "perceived_negatively": false,
              "word": "知的な"
          },
          {
              "perceived_negatively": false,
              "word": "洞察力がある"
          },
          {
              "perceived_negatively": false,
              "word": "多芸な"
          },
          {
              "perceived_negatively": false,
              "word": "創造性がある"
          }
      ],
      "Openness_plus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "情熱的"
          },
          {
              "perceived_negatively": false,
              "word": "興奮しやすい"
          },
          {
              "perceived_negatively": false,
              "word": "肉感的な"
          }
      ]
  },
  "values": {
      "Hedonism": [
          {
              "Term": "生活を楽しむこと",
              "LowDescription": "単なる個人の楽しみよりも大きな目標を伴う行動を優先します",
              "HighDescription": "人生を最大限に楽しもうとしています"
          }
      ],
      "Self-transcendence": [
          {
              "Term": "他人への支援",
              "LowDescription": "人は干渉されずに自分で物事に対処できると思われています",
              "HighDescription": "自分のまわりの人々を世話することは重要であると考えます"
          },
          {
              "Term": "公平",
              "LowDescription": "人は自ら機会を作っていくものと信じます",
              "HighDescription": "社会正義と全ての人の平等を信じます"
          },
          {
              "Term": "社会正義",
              "LowDescription": "人は自ら機会を作っていくものと信じます",
              "HighDescription": "社会正義と全ての人の平等を信じます"
          },
          {
              "Term": "平等",
              "LowDescription": "人は自ら機会を作っていくものと信じます",
              "HighDescription": "社会正義と全ての人の平等を信じます"
          },
          {
              "Term": "コミュニティ・サービス",
              "LowDescription": "干渉されずに自分で物事に対処できると思われています",
              "HighDescription": "自分のまわりの人々を世話することは重要であると考えます"
          }
      ],
      "Conservation": [
          {
              "Term": "伝統",
              "LowDescription": "人が通った道よりもわが道を行くことを大切にします",
              "HighDescription": "自分が属するグループに敬意を払い、それらのガイダンスに従います"
          },
          {
              "Term": "調和",
              "LowDescription": "何が正しいか、他人がどう思うかではなく、自分の信条で決定します",
              "HighDescription": "規則は理由があって存在すると知っており、それらを破らないようにしています"
          },
          {
              "Term": "謙虚",
              "LowDescription": "何が正しいか、他人がどう思うかではなく、自分の信条で決定します",
              "HighDescription": "他人に従うことに価値を見出します"
          },
          {
              "Term": "社会規範",
              "LowDescription": "何が正しいか、他人がどう思うかではなく、自分の信条で決定します",
              "HighDescription": "規則は理由があって存在すると知っており、それらを破らないようにしています"
          },
          {
              "Term": "セキュリティー",
              "LowDescription": "目的を達成するためにはセキュリティーが犠牲になってもよいと信じます",
              "HighDescription": "安全性とセキュリティーは守るべき重要なものであると信じます"
          },
          {
              "Term": "安全性",
              "LowDescription": "目的を達成するためには安全性が犠牲になってもよいと信じます",
              "HighDescription": "安全性とセキュリティは守るべき重要なものであると信じます"
          }
      ],
      "Openness-to-change": [
          {
              "Term": "自主性",
              "LowDescription": "他人が自分の行動の指揮をとることを受け入れます",
              "HighDescription": "最高の成果が得られるよう、自分自身で目標を設定する傾向があります"
          },
          {
              "Term": "興奮",
              "LowDescription": "危険を冒して新しいことに挑むより、悪くないと分かっていることを選びます",
              "HighDescription": "新しく刺激的な経験をすることを熱望しています"
          },
          {
              "Term": "創造性",
              "LowDescription": "危険を冒して新しいことに挑むより、悪くないと分かっていることを選びます",
              "HighDescription": "新しく刺激的な経験をすることを熱望しています"
          },
          {
              "Term": "好奇心",
              "LowDescription": "危険を冒して新しいことに挑むより、悪くないと分かっていることを選びます",
              "HighDescription": "新しく刺激的な経験をすることを熱望しています"
          },
          {
              "Term": "主体性",
              "LowDescription": "他人が自分の行動の指揮をとることを受け入れます",
              "HighDescription": "最高の成果が得られるよう、自分自身で目標を設定する傾向があります"
          },
          {
              "Term": "自由",
              "LowDescription": "他人が自分の行動の指揮をとることを受け入れます",
              "HighDescription": "最高の成果が得られるよう、自分自身で目標を設定する傾向があります"
          }
      ],
      "Self-enhancement": [
          {
              "Term": "成功すること",
              "LowDescription": "自分の才能を誇示することにあまり拘らず意思決定します",
              "HighDescription": "自分自身を向上させ、自分が有能な人であることを実証する機会を探しています"
          },
          {
              "Term": "社会的地位の獲得",
              "LowDescription": "社会的地位に満足していて、それ以上を強くは望んでいません",
              "HighDescription": "自分の地位と世間体を向上するために相当な努力を行います"
          },
          {
              "Term": "野心",
              "LowDescription": "社会的地位に満足していて、それ以上を強くは望んでいません",
              "HighDescription": "ゴールへ突き進むことが重要であると感じます"
          },
          {
              "Term": "大成功",
              "LowDescription": "自分の才能を誇示することにあまり拘らず意思決定します",
              "HighDescription": "自分自身を向上させ、自分が有能な人であることを実証する機会を探しています"
          }
      ]
  }
}

},{}],4:[function(require,module,exports){
module.exports={
  "big5": {
    "Openness": {
      "HighDescription": "지적으로 호기심이 있고, 감정적으로 인식하며, 심미적인 것에 대한 감성이 풍부하고 새로운 것을 시도 할 의향이 있습니다. ",
      "LowDescription": "단조롭고 간단한 것을 선호하고, 복잡하고 모호하며 미묘한 것보다 분명한 것을 선호합니다."
    },
    "Conscientiousness": {
      "HighDescription": "보다 자기훈련이 되었고 충실함. 혹은 예상 밖이거나 척도에 거스르는 것에 반한 성취를 목표로 합니다. ",
      "LowDescription": "계획적인 것보다 즉흥적으로 선호하는 경향이 있습니다."
    },
    "Extraversion": {
      "HighDescription": "보다 활기차고 확연한 외부세계와의 관계. 상위그룹의 가시성, 대화하는 것 그리고 자기주장을 하는 것과 같이. ",
      "LowDescription": "사회세계에서 더 독립적인 것과 덜 자극적인 것이 필요합니다. 그것은 그들이 부끄럼을 탄다거나, 친화적이지 않다거나, 반사회적이라는 것을 의미하지는 않습니다."
    },
    "Agreeableness": {
      "HighDescription": "다른사람들과 함께하는 가치. 그들은 인간 본성에 대해 보다 낙관적인 견해를 가지고 있습니다. ",
      "LowDescription": "다른 사람들보다 자기 이익을 중시합니다. 그들은 다른 사람들의 동기유발에 회의적입니다."
    },
    "Neuroticism": {
      "HighDescription": "부정적인 감정을 갖거나 화를 낼 가능성이 더 큽니다. 그것은 그들이 힘든 시기를 겪고 있음을 의미 할 수 있습니다. ",
      "LowDescription": "더 평온하고, 화를 낼 가능성이 더 적습니다. 그렇다고 그들이 긍정적이거나 행복한 사람들이라는 의미는 아닙니다."
    }
  },
  "facets": {
    "Intellect": {
      "LowTerm": "구체적인",
      "HighDescription": "귀하는 새로운 아이디어에 흥미와 열린마음을 가지고 있고, 그것들을 탐구하는 것을 좋아합니다",
      "HighTerm": "철학적인",
      "LowDescription": "귀하는 추상적인 생각을 거의 고려하지 않고, 있는 그대로 처리하는 것을 선호합니다",
      "Big5": "Openness"
    },
    "Gregariousness": {
      "LowTerm": "의존적인",
      "HighDescription": "귀하는 다른 사람들과 함께하는 것을 좋아합니다",
      "HighTerm": "사교적인",
      "LowDescription": "귀하는 자신만의 시간을 갖고 싶어하는 강한 열망이 있습니다",
      "Big5": "Extraversion"
    },
    "Achievement striving": {
      "LowTerm": "만족하는",
      "HighDescription": "귀하는 자신을 위한 높은 목표를 가지고 있으며 그것을 달성하기 위해 열심히 노력합니다",
      "HighTerm": "의욕이 넘치는",
      "LowDescription": "귀하는 귀하의 성취수준에 만족하여 야심찬 목표를 설정할 필요성을 느끼지 못합니다",
      "Big5": "Conscientiousness"
    },
    "Depression": {
      "LowTerm": "만족하는",
      "HighDescription": "귀하가 행복해하지 않는 일에 대해 꽤 자주 생각합니다",
      "HighTerm": "우울한",
      "LowDescription": "귀하는 일반적으로 자기자신을 편하게 느낍니다",
      "Big5": "Neuroticism"
    },
    "Sympathy": {
      "LowTerm": "무정한",
      "HighDescription": "귀하는 다른 사람들이 느끼는 것을 느끼고 그들에게 동정심을 가집니다",
      "HighTerm": "이해심이 있는",
      "LowDescription": "귀하는 사람들이 일반적으로 다른 사람들보다 자신에게 더 의존해야한다고 생각합니다",
      "Big5": "Agreeableness"
    },
    "Imagination": {
      "LowTerm": "현실적인",
      "HighDescription": "귀하는 엉뚱한 상상력을 가지고 있습니다",
      "HighTerm": "상상력이 풍부한",
      "LowDescription": "귀하는 환상보다 사실을 선호합니다",
      "Big5": "Openness"
    },
    "Self-discipline": {
      "LowTerm": "간헐적인",
      "HighDescription": "귀하는 어려운 작업과 맞서 싸우고 수행할 수 있습니다",
      "HighTerm": "끈질긴",
      "LowDescription": "귀하는 어려운 작업을 오랜 기간 수행하는데 어려움을 겪고 있습니다",
      "Big5": "Conscientiousness"
    },
    "Assertiveness": {
      "LowTerm": "조용한",
      "HighDescription": "귀하는 상황을 대변하고 책임지는 경향이 있으며, 그룹을 이끄는게 편안합니다",
      "HighTerm": "적극적인",
      "LowDescription": "귀하는 특히 그룹 상황에서 말하는 것보다 듣는 것을 더 선호합니다",
      "Big5": "Extraversion"
    },
    "Cheerfulness": {
      "LowTerm": "근엄한",
      "HighDescription": "귀하는 즐거운 사람이고 그 기쁨을 세상과 공유합니다",
      "HighTerm": "쾌활한",
      "LowDescription": "귀하는 일반적으로 심각하고 자주 농담하지 않습니다",
      "Big5": "Extraversion"
    },
    "Self-efficacy": {
      "LowTerm": "자신감이 부족한",
      "HighDescription": "귀하는 귀하가 시작한 일을 성공적으로 수행하는 능력이 있다고 느낍니다",
      "HighTerm": "자신감있는",
      "LowDescription": "귀하는 귀하의 목표를 달성하는 능력에 자주 의문이 생깁니다",
      "Big5": "Conscientiousness"
    },
    "Morality": {
      "LowTerm": "타협적인",
      "HighDescription": "귀하는 출세하기 위해 다른 사람들을 이용하는 것이 잘못 되었다고 생각합니다",
      "HighTerm": "타협하지않는",
      "LowDescription": "귀하는 귀하가 원하는 것을 얻기 위해 모든 가능한 방법을 사용하는 것이 편안합니다",
      "Big5": "Agreeableness"
    },
    "Liberalism": {
      "LowTerm": "권위를 존중하는",
      "HighDescription": "귀하는 긍정적인 변화를 가져올 수 있도록 하기 위해 권위와 전통적 가치에 도전하는 것을 선호합니다",
      "HighTerm": "권위에 도전하는",
      "LowDescription": "귀하는 안정감을 유지하기 위해 전통을 따르는 것을 선호합니다",
      "Big5": "Openness"
    },
    "Altruism": {
      "LowTerm": "자기중심적인",
      "HighDescription": "귀하는 다른 사람들을 도울 때 성취감을 느낄 것이고, 그렇게 하기위해 특별히 애를 쓸 것 입니다",
      "HighTerm": "이타적인",
      "LowDescription": "귀하는 다른 사람들을 위해 시간을 보내는 것보다 자신을 돌보는 것이 더 신경씁니다",
      "Big5": "Agreeableness"
    },
    "Self-consciousness": {
      "LowTerm": "자신감있는",
      "HighDescription": "귀하는 다른 사람들이 귀하에 대해 생각하고 있는 것에 민감합니다",
      "HighTerm": "남의 시선을 의식하는",
      "LowDescription": "당신은 당황하기가 어렵고 대체로 자신감이 있습니다",
      "Big5": "Neuroticism"
    },
    "Vulnerability": {
      "LowTerm": "압박감을 받아도 침착한",
      "HighDescription": "귀하는 스트레스가 많은 상황에서 쉽게 압도됩니다",
      "HighTerm": "스트레스에 민감한",
      "LowDescription": "귀하는 예기치 않은 사건을 침착하고 효과적으로 처리합니다",
      "Big5": "Neuroticism"
    },
    "Trust": {
      "LowTerm": "타인을 조심하는",
      "HighDescription": "귀하는 다른 사람들을 가장 잘 믿으며 사람들을 쉽게 신뢰합니다",
      "HighTerm": "타인을 신뢰하는",
      "LowDescription": "귀하는 다른 사람들의 의도에 조심성이 있으며 쉽게 신뢰하지 않습니다",
      "Big5": "Agreeableness"
    },
    "Orderliness": {
      "LowTerm": "조직화 되지않은",
      "HighDescription": "귀하는 인생에서 체계적인 것들에 대한 강한 필요성을 느낍니다",
      "HighTerm": "조직적인",
      "LowDescription": "귀하는 일상생활에서 조직을 위해 많은 시간을 보내지 않습니다",
      "Big5": "Conscientiousness"
    },
    "Anxiety": {
      "LowTerm": "자신감있는",
      "HighDescription": "귀하는 일어날 수 있는 일에 대해 걱정하는 경향이 있습니다",
      "HighTerm": "걱정을 잘하는",
      "LowDescription": "귀하는 평온하고 자신감이 있는 경향이 있습니다",
      "Big5": "Neuroticism"
    },
    "Friendliness": {
      "LowTerm": "내성적인",
      "HighDescription": "귀하는 쉽게 친구를 사귀고 다른 사람들과 함께 있는 것을 편안하게 느낍니다",
      "HighTerm": "외향적인",
      "LowDescription": "귀하는 개인적인 성향의 사람이고 많은 사람들을 마음속에 들여 보내지 않습니다",
      "Big5": "Extraversion"
    },
    "Modesty": {
      "LowTerm": "자랑스러워하는",
      "HighDescription": "귀하는 집중의 중심에 있는 것이 불편합니다",
      "HighTerm": "보통의",
      "LowDescription": "귀하는 자부심이 대단하고, 귀하의 자아에 만족합니다",
      "Big5": "Agreeableness"
    },
    "Activity level": {
      "LowTerm": "느긋한",
      "HighDescription": "귀하는 많은 활동과 함께 빠르게 진행되고, 바쁜 일정을 즐깁니다",
      "HighTerm": "활동적인",
      "LowDescription": "귀하는 인생의 여유로운 속도에 감사하게 생각합니다",
      "Big5": "Extraversion"
    },
    "Cautiousness": {
      "LowTerm": "대담한",
      "HighDescription": "귀하는 의사결정을 내리기 전에 면밀히 생각합니다",
      "HighTerm": "계획적인",
      "LowDescription": "귀하는 결정을 내리는 데 심사숙고하는 시간을 소비하는 것보다 차라리 바로 행동을 취하는 편입니다",
      "Big5": "Conscientiousness"
    },
    "Dutifulness": {
      "LowTerm": "근심걱정없는",
      "HighDescription": "귀하는 심지어 불편할 때라도, 심하게 규칙과 의무를 지킵니다",
      "HighTerm": "순종적인",
      "LowDescription": "귀하는 규칙과 의무를 무시하고 귀하가 원하는 것을 합니다",
      "Big5": "Conscientiousness"
    },
    "Artistic interests": {
      "LowTerm": "예술에 무관심한",
      "HighDescription": "귀하는 아름다움을 즐기고 창조적인 경험을 찾아냅니다",
      "HighTerm": "예술에 감탄하는",
      "LowDescription": "귀하는 설문 조사에 참여한 대부분의 사람들보다 예술적이거나 창조적인 활동에 덜 관심이 있습니다",
      "Big5": "Openness"
    },
    "Immoderation": {
      "LowTerm": "Self-세심히 통제된",
      "HighDescription": "귀하는 귀하의 열망을 강력하게 느끼고 그것들에 의해 쉽게 유혹됩니다",
      "HighTerm": "쾌락주의의",
      "LowDescription": "귀하는 특히 강렬하지 않은 당신의 열망을 통제 할 수 있습니다",
      "Big5": "Neuroticism"
    },
    "Emotionality": {
      "LowTerm": "감정에 좌우되지 않는",
      "HighDescription": "귀하는 귀하의 감정과 그것을 표현하는 법을 알고 있습니다",
      "HighTerm": "감정적으로 의식하는",
      "LowDescription": "귀하는 자주 귀하의 감정을 생각하거나 공개적으로 표현하지 않습니다",
      "Big5": "Openness"
    },
    "Adventurousness": {
      "LowTerm": "일관된",
      "HighDescription": "귀하는 새로운 것을 경험하고 싶어합니다",
      "HighTerm": "모험심이 강한",
      "LowDescription": "귀하는 익숙한 루틴을 즐기고, 그것으로 부터 이탈하지 않는 것을 선호합니다",
      "Big5": "Openness"
    },
    "Anger": {
      "LowTerm": "온순한 기질인",
      "HighDescription": "귀하는 과격한 기질이 있는데, 특히 귀하의 뜻대로 되지 않을 때 그렇습니다",
      "HighTerm": "불같은",
      "LowDescription": "귀하는 화가 나는데 많은 시간이 필요합니다",
      "Big5": "Neuroticism"
    },
    "Excitement-seeking": {
      "LowTerm": "침착함을 추구하는",
      "HighDescription": "귀하는 많은 액션이 없을 때 지루함을 느끼고 위험을 감수하는 것에 흥분합니다",
      "HighTerm": "흥분을 추구하는",
      "LowDescription": "귀하는 조용하고 안정적이며 안전한 활동을 선호합니다",
      "Big5": "Extraversion"
    },
    "Cooperation": {
      "LowTerm": "버릇없는",
      "HighDescription": "귀하는 기뻐하는 감정이 쉽게 나타나며 대립을 피하려기 위해 노력합니다",
      "HighTerm": "잘 협조하는",
      "LowDescription": "귀하는 자기모순적인 다른 사람들로부터 피하지 않습니다",
      "Big5": "Agreeableness"
    }
  },
  "needs": {
    "Practicality": ["효율성", "실현가능성", "높은가치", "편의성"],
    "Curiosity": ["발견", "숙달", "지식습득"],
    "Stability": ["안정성", "진위", "신뢰성"],
    "Self-expression": ["자기표현", "개인적인 권한", "개인적인 강점"],
    "Structure": ["조직", "정직함", "명확성", "신뢰할 수 있음"],
    "Challenge": ["명성", "경쟁", "영광"],
    "Liberty": ["현대성", "가능성 확장", "탈출", "자발적임", "참신함"],
    "Harmony": ["행복", "정중함", "공손함"],
    "Love": ["소속관계", "친밀감"],
    "Excitement": ["흥청대며놀기", "예측", "유쾌한 기분"],
    "Ideal": ["교양", "정신성", "우월함", "이행"],
    "Closeness": ["소속성", "향수", "친밀함"]
  },
  "phrases": {
      "Experiences that give a sense of %s hold some appeal to you": "%을(를) 느낀 경험은 귀하에게 매력적으로 느껴집니다",
      "You consider %s to guide a large part of what you do": "귀하가 하는 일의 많은 부분에 %s를(을) 고려합니다",
      "You value both %s a bit": "귀하는 %s 또한 어느정도 가치있게 여깁니다",
      "And %s": "그리고 %s 입니다(합니다)",
      "And you are %s": "또한 귀하는 %s 입니다(합니다)",
      "a bit %s": "약간 %s",
      "can be perceived as %s": "%s (으)로 인식될 수 있습니다",
      "You are relatively unconcerned with both %s and %s": "귀하는 %s 와(과) %s 을(를) 비교적 신경쓰지않는 편입니다",
      "You are %s and %s": "귀하는 %s 이고(하고) %s 입니다(합니다)",
      "You value both %s and %s a bit": "귀하는 %s 와(과) %s 모두를 어느정도 가치있게 여깁니다",
      "You don't find %s to be particularly motivating for you": "귀하는 %s 에서 특별한 동기부여를 받지 못하는 편입니다",
      "You are %s": "귀하는 %s 입니다(합니다)",
      "You are %s, %s and %s": "귀하는 %s, %s 그리고  %s 입니다(합니다)",
      "Your choices are driven by a desire for %s": "귀하의 선택들은 %s에 대한 열망에 의해 좌우됩니다",
      "You are motivated to seek out experiences that provide a strong feeling of %s": "귀하는 %s에 대한 강한 느낌을 주는 경험을 겪고 싶어 합니다",
      "Experiences that make you feel high %s are generally unappealing to you": "%s 을(를) 많이 느끼는 경험들은 귀하가 그다지 매력적으로 느끼지 않습니다",
      "You don't find either %s or %s to be particularly motivating for you": "%s 이나 %s 모두 귀하를 특별히 움직이게 하는 동기는 되지 못합니다",
      "You are relatively unconcerned with %s": "%s에 대해 귀하는 상대적으로 신경쓰지 않는 편입니다",
      "somewhat %s": "다소 %s",
      "You value %s a bit more": "귀하는 %s에 조금 더 가치를 둡니다",
      "You consider both %s and %s to guide a large part of what you do": "귀하는 무언가 하시는 일의 많은 부분에 %s 와(과) %s 모두를 고려합니다"
  },
  "traits": {
    "Conscientiousness_plus_Agreeableness_minus": [{
      "perceived_negatively": true,
      "word": "단호한"
    }, {
      "perceived_negatively": false,
      "word": "엄격한"
    }, {
      "perceived_negatively": false,
      "word": "융통성 없는"
    }],
    "Neuroticism_plus_Extraversion_minus": [{
      "perceived_negatively": false,
      "word": "신중한"
    }, {
      "perceived_negatively": true,
      "word": "조바심치는"
    }, {
      "perceived_negatively": true,
      "word": "자신이없는"
    }, {
      "perceived_negatively": true,
      "word": "비관적인"
    }, {
      "perceived_negatively": false,
      "word": "비밀스러운"
    }, {
      "perceived_negatively": true,
      "word": "걱정하는"
    }, {
      "perceived_negatively": true,
      "word": "부정론적인"
    }, {
      "perceived_negatively": false,
      "word": "자기비판적인"
    }],
    "Agreeableness_minus_Neuroticism_minus": [{
      "perceived_negatively": true,
      "word": "둔감한"
    }, {
      "perceived_negatively": true,
      "word": "애정이없는"
    }, {
      "perceived_negatively": true,
      "word": "열정없는"
    }, {
      "perceived_negatively": true,
      "word": "감정을 드러내지 않는"
    }],
    "Agreeableness_plus_Neuroticism_plus": [{
      "perceived_negatively": false,
      "word": "감상적인"
    }, {
      "perceived_negatively": false,
      "word": "다정한"
    }, {
      "perceived_negatively": false,
      "word": "예민한"
    }, {
      "perceived_negatively": false,
      "word": "부드러운"
    }, {
      "perceived_negatively": false,
      "word": "열정을느끼는"
    }, {
      "perceived_negatively": false,
      "word": "로맨틱한"
    }],
    "Conscientiousness_minus_Neuroticism_minus": [{
      "perceived_negatively": false,
      "word": "형식에 얽매이지 않는"
    }, {
      "perceived_negatively": false,
      "word": "절제하는"
    }],
    "Agreeableness_plus_Conscientiousness_minus": [{
      "perceived_negatively": false,
      "word": "잘난체 하지 않는"
    }, {
      "perceived_negatively": false,
      "word": "본인을 내세우지 않는"
    }],
    "Conscientiousness_plus_Agreeableness_plus": [{
      "perceived_negatively": false,
      "word": "믿을 수 있는"
    }, {
      "perceived_negatively": false,
      "word": "책임지고 있는"
    }, {
      "perceived_negatively": false,
      "word": "신뢰할 수 있는"
    }, {
      "perceived_negatively": false,
      "word": "예절이 바른"
    }, {
      "perceived_negatively": false,
      "word": "사려깊은"
    }],
    "Agreeableness_minus_Extraversion_plus": [{
      "perceived_negatively": true,
      "word": "완고한"
    }, {
      "perceived_negatively": true,
      "word": "퉁명스러운"
    }, {
      "perceived_negatively": true,
      "word": "대충의"
    }, {
      "perceived_negatively": true,
      "word": "금방이라도 싸울듯이"
    }, {
      "perceived_negatively": true,
      "word": "개략적인"
    }, {
      "perceived_negatively": false,
      "word": "교활한"
    }, {
      "perceived_negatively": true,
      "word": "조종하는"
    }, {
      "perceived_negatively": true,
      "word": "거친"
    }, {
      "perceived_negatively": true,
      "word": "정직하지 못한"
    }],
    "Neuroticism_plus_Openness_minus": [{
      "perceived_negatively": false,
      "word": "쉽게 난처해지는"
    }, {
      "perceived_negatively": false,
      "word": "쉽게 짜증내는"
    }, {
      "perceived_negatively": false,
      "word": "걱정되는"
    }],
    "Openness_minus_Agreeableness_plus": [{
      "perceived_negatively": true,
      "word": "단순한"
    }, {
      "perceived_negatively": true,
      "word": "의존하는"
    }],
    "Neuroticism_minus_Openness_minus": [{
      "perceived_negatively": false,
      "word": "쉽게 동요하지 않는"
    }, {
      "perceived_negatively": true,
      "word": "둔감한"
    }],
    "Agreeableness_minus_Conscientiousness_minus": [{
      "perceived_negatively": true,
      "word": "사려깊지못한"
    }, {
      "perceived_negatively": true,
      "word": "불공손한"
    }, {
      "perceived_negatively": true,
      "word": "의심많은"
    }, {
      "perceived_negatively": true,
      "word": "비협조적인"
    }, {
      "perceived_negatively": true,
      "word": "무심한"
    }],
    "Extraversion_plus_Conscientiousness_plus": [{
      "perceived_negatively": false,
      "word": "활동적인"
    }, {
      "perceived_negatively": false,
      "word": "경쟁력있는"
    }, {
      "perceived_negatively": false,
      "word": "끈질긴"
    }, {
      "perceived_negatively": false,
      "word": "야심찬"
    }, {
      "perceived_negatively": false,
      "word": "목적의식이 있는"
    }],
    "Agreeableness_minus_Conscientiousness_plus": [{
      "perceived_negatively": false,
      "word": "엄격한"
    }, {
      "perceived_negatively": false,
      "word": "융통성없는"
    }, {
      "perceived_negatively": true,
      "word": "단호한"
    }],
    "Neuroticism_minus_Agreeableness_plus": [{
      "perceived_negatively": false,
      "word": "참을성있는"
    }, {
      "perceived_negatively": false,
      "word": "여유있는"
    }, {
      "perceived_negatively": false,
      "word": "힘들지 않은"
    }, {
      "perceived_negatively": false,
      "word": "현실적인"
    }, {
      "perceived_negatively": false,
      "word": "낙관적인"
    }, {
      "perceived_negatively": false,
      "word": "명청한"
    }, {
      "perceived_negatively": false,
      "word": "무비판적인"
    }, {
      "perceived_negatively": false,
      "word": "잘난체 하지 않는"
    }],
    "Openness_minus_Extraversion_minus": [{
      "perceived_negatively": false,
      "word": "예측할 수 있는"
    }, {
      "perceived_negatively": true,
      "word": "상상력이 부족한"
    }, {
      "perceived_negatively": false,
      "word": "어두침침한"
    }, {
      "perceived_negatively": true,
      "word": "무관심한"
    }, {
      "perceived_negatively": true,
      "word": "모험심이 없는"
    }],
    "Extraversion_plus_Agreeableness_minus": [{
      "perceived_negatively": false,
      "word": "자기의견을 고집하는"
    }, {
      "perceived_negatively": true,
      "word": "단호한"
    }, {
      "perceived_negatively": true,
      "word": "지배하려드는"
    }, {
      "perceived_negatively": true,
      "word": "자랑하는"
    }, {
      "perceived_negatively": true,
      "word": "우두머리행세를 하는"
    }, {
      "perceived_negatively": false,
      "word": "우세한"
    }, {
      "perceived_negatively": false,
      "word": "교활한"
    }],
    "Neuroticism_plus_Agreeableness_minus": [{
      "perceived_negatively": true,
      "word": "괴팍한"
    }, {
      "perceived_negatively": true,
      "word": "짜증내는"
    }, {
      "perceived_negatively": true,
      "word": "다투기 좋아하는"
    }, {
      "perceived_negatively": true,
      "word": "참을성이 없는"
    }, {
      "perceived_negatively": true,
      "word": "성격이 나쁜"
    }, {
      "perceived_negatively": true,
      "word": "괴팍한"
    }, {
      "perceived_negatively": true,
      "word": "짜증내는"
    }],
    "Neuroticism_plus_Extraversion_plus": [{
      "perceived_negatively": false,
      "word": "흥분을 잘하는"
    }, {
      "perceived_negatively": true,
      "word": "장황한"
    }, {
      "perceived_negatively": false,
      "word": "추파를던지는"
    }, {
      "perceived_negatively": true,
      "word": "격정적인"
    }, {
      "perceived_negatively": false,
      "word": "낭비벽이있는"
    }, {
      "perceived_negatively": true,
      "word": "변덕스러운"
    }],
    "Agreeableness_minus_Openness_minus": [{
      "perceived_negatively": true,
      "word": "거친"
    }, {
      "perceived_negatively": true,
      "word": "요령없는"
    }, {
      "perceived_negatively": true,
      "word": "퉁명스러운"
    }, {
      "perceived_negatively": true,
      "word": "속이좁은"
    }, {
      "perceived_negatively": true,
      "word": "냉담한"
    }, {
      "perceived_negatively": true,
      "word": "무자비한"
    }, {
      "perceived_negatively": true,
      "word": "몰인정한"
    }, {
      "perceived_negatively": true,
      "word": "앙심을 품은"
    }],
    "Conscientiousness_minus_Agreeableness_plus": [{
      "perceived_negatively": false,
      "word": "잘난체 하지 않는"
    }, {
      "perceived_negatively": false,
      "word": "자기를 내세우지 않는"
    }],
    "Agreeableness_plus_Openness_plus": [{
      "perceived_negatively": false,
      "word": "상냥한"
    }, {
      "perceived_negatively": false,
      "word": "요령있는"
    }, {
      "perceived_negatively": false,
      "word": "외교적인"
    }, {
      "perceived_negatively": false,
      "word": "깊은"
    }, {
      "perceived_negatively": false,
      "word": "이상주의적인"
    }],
    "Agreeableness_minus_Neuroticism_plus": [{
      "perceived_negatively": true,
      "word": "비판적인"
    }, {
      "perceived_negatively": true,
      "word": "이기적인"
    }, {
      "perceived_negatively": true,
      "word": "성질이나쁜"
    }, {
      "perceived_negatively": true,
      "word": "적대적인"
    }, {
      "perceived_negatively": true,
      "word": "성격이나쁜"
    }, {
      "perceived_negatively": true,
      "word": "억울해하는"
    }, {
      "perceived_negatively": true,
      "word": "유쾌하지못한"
    }, {
      "perceived_negatively": true,
      "word": "부담이 큰"
    }],
    "Openness_minus_Neuroticism_minus": [{
      "perceived_negatively": false,
      "word": "쉽게동요하지 않는"
    }, {
      "perceived_negatively": true,
      "word": "둔감한"
    }],
    "Conscientiousness_plus_Openness_plus": [{
      "perceived_negatively": false,
      "word": "세련된"
    }, {
      "perceived_negatively": false,
      "word": "완벽주의자적인"
    }, {
      "perceived_negatively": false,
      "word": "근면한"
    }, {
      "perceived_negatively": false,
      "word": "위엄있는"
    }, {
      "perceived_negatively": false,
      "word": "정제된"
    }, {
      "perceived_negatively": false,
      "word": "교양있는"
    }, {
      "perceived_negatively": false,
      "word": "선견지명이있는"
    }],
    "Agreeableness_minus_Openness_plus": [{
      "perceived_negatively": false,
      "word": "상황판단이 빠른"
    }, {
      "perceived_negatively": false,
      "word": "괴짜인"
    }, {
      "perceived_negatively": false,
      "word": "개인주의적인"
    }],
    "Neuroticism_plus_Openness_plus": [{
      "perceived_negatively": false,
      "word": "흥분을잘하는"
    }, {
      "perceived_negatively": false,
      "word": "열정을느끼는"
    }, {
      "perceived_negatively": false,
      "word": "감각적인"
    }],
    "Neuroticism_minus_Openness_plus": [{
      "perceived_negatively": false,
      "word": "진심어린"
    }, {
      "perceived_negatively": false,
      "word": "다재다능한"
    }, {
      "perceived_negatively": false,
      "word": "창의적인"
    }, {
      "perceived_negatively": false,
      "word": "지적인"
    }, {
      "perceived_negatively": false,
      "word": "통찰력있는"
    }],
    "Openness_minus_Conscientiousness_plus": [{
      "perceived_negatively": false,
      "word": "관습적인"
    }, {
      "perceived_negatively": false,
      "word": "전통의"
    }],
    "Extraversion_plus_Openness_minus": [{
      "perceived_negatively": true,
      "word": "장황한"
    }, {
      "perceived_negatively": true,
      "word": "부도덕한"
    }, {
      "perceived_negatively": true,
      "word": "거만한"
    }],
    "Extraversion_minus_Openness_plus": [{
      "perceived_negatively": false,
      "word": "내부지향적인"
    }, {
      "perceived_negatively": false,
      "word": "자기성찰적인"
    }, {
      "perceived_negatively": false,
      "word": "깊은생각에 잠긴"
    }, {
      "perceived_negatively": false,
      "word": "숙고하고 있는"
    }, {
      "perceived_negatively": false,
      "word": "자기반성적인"
    }],
    "Openness_minus_Conscientiousness_minus": [{
      "perceived_negatively": true,
      "word": "선견지명이 없는"
    }, {
      "perceived_negatively": false,
      "word": "무모한"
    }, {
      "perceived_negatively": true,
      "word": "비논리적인"
    }, {
      "perceived_negatively": true,
      "word": "미숙한"
    }, {
      "perceived_negatively": true,
      "word": "무계획적인"
    }, {
      "perceived_negatively": false,
      "word": "해이한"
    }, {
      "perceived_negatively": true,
      "word": "경솔한"
    }],
    "Extraversion_minus_Neuroticism_minus": [{
      "perceived_negatively": false,
      "word": "평온한"
    }, {
      "perceived_negatively": false,
      "word": "차분한"
    }, {
      "perceived_negatively": false,
      "word": "얌전한"
    }, {
      "perceived_negatively": false,
      "word": "공정한"
    }, {
      "perceived_negatively": false,
      "word": "잘난체하지 않는"
    }, {
      "perceived_negatively": false,
      "word": "잠자코 동의하는"
    }],
    "Conscientiousness_plus_Openness_minus": [{
      "perceived_negatively": false,
      "word": "전통의"
    }, {
      "perceived_negatively": false,
      "word": "관습적인"
    }],
    "Openness_plus_Neuroticism_minus": [{
      "perceived_negatively": false,
      "word": "창의적인"
    }, {
      "perceived_negatively": false,
      "word": "지적인"
    }, {
      "perceived_negatively": false,
      "word": "통찰력있는"
    }, {
      "perceived_negatively": false,
      "word": "다재다능한"
    }, {
      "perceived_negatively": false,
      "word": "독창적인"
    }],
    "Agreeableness_plus_Extraversion_minus": [{
      "perceived_negatively": false,
      "word": "마음이 부드러운"
    }, {
      "perceived_negatively": false,
      "word": "기분좋은"
    }, {
      "perceived_negatively": false,
      "word": "도와주는"
    }, {
      "perceived_negatively": false,
      "word": "겸손한"
    }, {
      "perceived_negatively": true,
      "word": "관대한"
    }],
    "Extraversion_minus_Conscientiousness_minus": [{
      "perceived_negatively": true,
      "word": "간접적인"
    }, {
      "perceived_negatively": true,
      "word": "기가허한"
    }, {
      "perceived_negatively": true,
      "word": "느릿느릿 움직이는"
    }, {
      "perceived_negatively": true,
      "word": "지속성이 없는"
    }, {
      "perceived_negatively": true,
      "word": "희미한"
    }],
    "Openness_plus_Conscientiousness_plus": [{
      "perceived_negatively": false,
      "word": "분석적인"
    }, {
      "perceived_negatively": false,
      "word": "통찰력있는"
    }, {
      "perceived_negatively": false,
      "word": "유용한 정보를 주는"
    }, {
      "perceived_negatively": false,
      "word": "분명히 표현하는"
    }, {
      "perceived_negatively": false,
      "word": "위엄있는"
    }, {
      "perceived_negatively": false,
      "word": "교양있는"
    }],
    "Openness_minus_Extraversion_plus": [{
      "perceived_negatively": true,
      "word": "장황한"
    }, {
      "perceived_negatively": true,
      "word": "부도덕한"
    }, {
      "perceived_negatively": true,
      "word": "거만한"
    }],
    "Conscientiousness_minus_Agreeableness_minus": [{
      "perceived_negatively": true,
      "word": "무분별한"
    }, {
      "perceived_negatively": true,
      "word": "비협조적인"
    }, {
      "perceived_negatively": true,
      "word": "믿을 수 없는"
    }, {
      "perceived_negatively": true,
      "word": "의심많은"
    }, {
      "perceived_negatively": true,
      "word": "무심한"
    }],
    "Agreeableness_plus_Neuroticism_minus": [{
      "perceived_negatively": false,
      "word": "관대한"
    }, {
      "perceived_negatively": false,
      "word": "즐거운"
    }, {
      "perceived_negatively": false,
      "word": "아량있는"
    }, {
      "perceived_negatively": false,
      "word": "평화로운"
    }, {
      "perceived_negatively": false,
      "word": "융통성있는"
    }, {
      "perceived_negatively": false,
      "word": "느긋한"
    }, {
      "perceived_negatively": false,
      "word": "공평한"
    }, {
      "perceived_negatively": false,
      "word": "자선을 베푸는"
    }, {
      "perceived_negatively": false,
      "word": "믿음직하게 여기는"
    }],
    "Openness_plus_Agreeableness_minus": [{
      "perceived_negatively": false,
      "word": "상황판단이 빠른"
    }, {
      "perceived_negatively": false,
      "word": "괴짜인"
    }, {
      "perceived_negatively": false,
      "word": "개인주의적인"
    }],
    "Conscientiousness_plus_Extraversion_plus": [{
      "perceived_negatively": false,
      "word": "야심찬"
    }, {
      "perceived_negatively": false,
      "word": "기민한"
    }, {
      "perceived_negatively": false,
      "word": "단호한"
    }, {
      "perceived_negatively": false,
      "word": "목적의식이 있는"
    }, {
      "perceived_negatively": false,
      "word": "경쟁력있는"
    }],
    "Openness_plus_Agreeableness_plus": [{
      "perceived_negatively": false,
      "word": "이상주의적인"
    }, {
      "perceived_negatively": false,
      "word": "외교적인"
    }, {
      "perceived_negatively": false,
      "word": "깊은"
    }, {
      "perceived_negatively": false,
      "word": "요령있는"
    }, {
      "perceived_negatively": false,
      "word": "상냥한"
    }],
    "Conscientiousness_minus_Openness_minus": [{
      "perceived_negatively": false,
      "word": "무모한"
    }, {
      "perceived_negatively": true,
      "word": "비논리적인"
    }, {
      "perceived_negatively": true,
      "word": "미숙한"
    }, {
      "perceived_negatively": true,
      "word": "무계획적인"
    }, {
      "perceived_negatively": false,
      "word": "해이한"
    }, {
      "perceived_negatively": true,
      "word": "경솔한"
    }],
    "Conscientiousness_plus_Neuroticism_plus": [{
      "perceived_negatively": false,
      "word": "까다로운"
    }, {
      "perceived_negatively": true,
      "word": "극도로 긴장한"
    }],
    "Neuroticism_minus_Extraversion_plus": [{
      "perceived_negatively": false,
      "word": "남의눈을 신경쓰지않는"
    }, {
      "perceived_negatively": false,
      "word": "피곤을 모르는"
    }, {
      "perceived_negatively": false,
      "word": "포기할 줄 모르는"
    }],
    "Openness_minus_Agreeableness_minus": [{
      "perceived_negatively": true,
      "word": "거친"
    }, {
      "perceived_negatively": true,
      "word": "요령없는"
    }, {
      "perceived_negatively": true,
      "word": "퉁명스러운"
    }, {
      "perceived_negatively": true,
      "word": "속이좁은"
    }, {
      "perceived_negatively": true,
      "word": "냉담한"
    }],
    "Neuroticism_plus_Agreeableness_plus": [{
      "perceived_negatively": false,
      "word": "감정적인"
    }, {
      "perceived_negatively": true,
      "word": "남을 잘 믿는"
    }, {
      "perceived_negatively": false,
      "word": "다정한"
    }, {
      "perceived_negatively": false,
      "word": "예민한"
    }, {
      "perceived_negatively": false,
      "word": "부드러운"
    }],
    "Extraversion_minus_Agreeableness_plus": [{
      "perceived_negatively": false,
      "word": "비공격적인"
    }, {
      "perceived_negatively": false,
      "word": "겸손한"
    }, {
      "perceived_negatively": false,
      "word": "순종적인"
    }, {
      "perceived_negatively": false,
      "word": "소심한"
    }, {
      "perceived_negatively": false,
      "word": "순응하는"
    }, {
      "perceived_negatively": false,
      "word": "소박한"
    }],
    "Agreeableness_plus_Extraversion_plus": [{
      "perceived_negatively": false,
      "word": "열광하는"
    }, {
      "perceived_negatively": false,
      "word": "행복한"
    }, {
      "perceived_negatively": false,
      "word": "친밀한"
    }, {
      "perceived_negatively": false,
      "word": "즐거운"
    }, {
      "perceived_negatively": false,
      "word": "아주 쾌활한"
    }, {
      "perceived_negatively": false,
      "word": "유머러스한"
    }],
    "Openness_plus_Extraversion_plus": [{
      "perceived_negatively": false,
      "word": "세속적인"
    }, {
      "perceived_negatively": false,
      "word": "과장된"
    }, {
      "perceived_negatively": false,
      "word": "유창한"
    }, {
      "perceived_negatively": false,
      "word": "탐구심이 많은"
    }, {
      "perceived_negatively": false,
      "word": "극심한"
    }],
    "Extraversion_minus_Openness_minus": [{
      "perceived_negatively": false,
      "word": "어두침침한"
    }, {
      "perceived_negatively": true,
      "word": "온순한"
    }, {
      "perceived_negatively": true,
      "word": "모험심이 없는"
    }, {
      "perceived_negatively": false,
      "word": "수동적인"
    }, {
      "perceived_negatively": true,
      "word": "무관심한"
    }, {
      "perceived_negatively": false,
      "word": "고분고분한"
    }],
    "Extraversion_minus_Conscientiousness_plus": [{
      "perceived_negatively": false,
      "word": "차분한"
    }, {
      "perceived_negatively": false,
      "word": "심각한"
    }, {
      "perceived_negatively": false,
      "word": "신중한"
    }, {
      "perceived_negatively": false,
      "word": "조심스러운"
    }, {
      "perceived_negatively": false,
      "word": "지조있는"
    }],
    "Neuroticism_minus_Extraversion_minus": [{
      "perceived_negatively": false,
      "word": "잘난체하지 않는"
    }, {
      "perceived_negatively": true,
      "word": "쉽게 흥분하지 않는"
    }, {
      "perceived_negatively": false,
      "word": "얌전한"
    }, {
      "perceived_negatively": false,
      "word": "평온한"
    }],
    "Extraversion_plus_Neuroticism_plus": [{
      "perceived_negatively": false,
      "word": "격정적인"
    }, {
      "perceived_negatively": true,
      "word": "장황한"
    }, {
      "perceived_negatively": false,
      "word": "낭비하는"
    }, {
      "perceived_negatively": true,
      "word": "변덕스러운"
    }, {
      "perceived_negatively": false,
      "word": "추파를 던지는"
    }],
    "Extraversion_plus_Openness_plus": [{
      "perceived_negatively": false,
      "word": "표현력이 있는"
    }, {
      "perceived_negatively": false,
      "word": "솔직한"
    }, {
      "perceived_negatively": false,
      "word": "극적인"
    }, {
      "perceived_negatively": false,
      "word": "자발적인"
    }, {
      "perceived_negatively": false,
      "word": "재치있는"
    }, {
      "perceived_negatively": false,
      "word": "기회주의적인"
    }, {
      "perceived_negatively": false,
      "word": "독립적인"
    }],
    "Conscientiousness_minus_Openness_plus": [{
      "perceived_negatively": false,
      "word": "관습에 얽매이지 않는"
    }, {
      "perceived_negatively": false,
      "word": "변덕스러운"
    }],
    "Extraversion_minus_Agreeableness_minus": [{
      "perceived_negatively": false,
      "word": "의심많은"
    }, {
      "perceived_negatively": false,
      "word": "타인을 조심하는"
    }, {
      "perceived_negatively": true,
      "word": "은둔적인"
    }, {
      "perceived_negatively": true,
      "word": "말을 잘 안하는"
    }, {
      "perceived_negatively": true,
      "word": "비사교적인"
    }, {
      "perceived_negatively": true,
      "word": "침울한"
    }, {
      "perceived_negatively": true,
      "word": "거리를 두는"
    }, {
      "perceived_negatively": false,
      "word": "냉담한"
    }],
    "Conscientiousness_minus_Neuroticism_plus": [{
      "perceived_negatively": true,
      "word": "침착하지 못한"
    }, {
      "perceived_negatively": true,
      "word": "모순되는"
    }, {
      "perceived_negatively": true,
      "word": "불규칙한"
    }, {
      "perceived_negatively": true,
      "word": "잘 잊어버리는"
    }, {
      "perceived_negatively": true,
      "word": "충동적인"
    }, {
      "perceived_negatively": true,
      "word": "경솔한"
    }],
    "Conscientiousness_plus_Neuroticism_minus": [{
      "perceived_negatively": false,
      "word": "철두철미한"
    }, {
      "perceived_negatively": false,
      "word": "꾸준한"
    }, {
      "perceived_negatively": false,
      "word": "한결같은"
    }, {
      "perceived_negatively": false,
      "word": "자기 수양이된"
    }, {
      "perceived_negatively": false,
      "word": "논리적인"
    }, {
      "perceived_negatively": false,
      "word": "결단력 있는"
    }, {
      "perceived_negatively": false,
      "word": "세심히 통제된"
    }, {
      "perceived_negatively": false,
      "word": "간결한"
    }],
    "Openness_minus_Neuroticism_plus": [{
      "perceived_negatively": false,
      "word": "쉽게 난처해지는"
    }, {
      "perceived_negatively": false,
      "word": "쉽게 짜증내는"
    }, {
      "perceived_negatively": false,
      "word": "걱정되는"
    }],
    "Agreeableness_plus_Openness_minus": [{
      "perceived_negatively": true,
      "word": "의존하는"
    }, {
      "perceived_negatively": true,
      "word": "단순한"
    }],
    "Conscientiousness_plus_Extraversion_minus": [{
      "perceived_negatively": false,
      "word": "조심스러운"
    }, {
      "perceived_negatively": false,
      "word": "자신감있는"
    }, {
      "perceived_negatively": false,
      "word": "시간을 지키는"
    }, {
      "perceived_negatively": false,
      "word": "격식을 차린"
    }, {
      "perceived_negatively": false,
      "word": "절약하는"
    }, {
      "perceived_negatively": false,
      "word": "지조있는"
    }],
    "Agreeableness_plus_Conscientiousness_plus": [{
      "perceived_negatively": false,
      "word": "도움이 되는"
    }, {
      "perceived_negatively": false,
      "word": "협력하는"
    }, {
      "perceived_negatively": false,
      "word": "사려깊은"
    }, {
      "perceived_negatively": false,
      "word": "존경심을 보이는"
    }, {
      "perceived_negatively": false,
      "word": "공손한"
    }, {
      "perceived_negatively": false,
      "word": "타당한"
    }, {
      "perceived_negatively": false,
      "word": "courteous"
    }, {
      "perceived_negatively": false,
      "word": "배려심 있는"
    }, {
      "perceived_negatively": false,
      "word": "충성스러운"
    }, {
      "perceived_negatively": false,
      "word": "도덕적인"
    }],
    "Neuroticism_minus_Conscientiousness_plus": [{
      "perceived_negatively": false,
      "word": "합리적인"
    }, {
      "perceived_negatively": false,
      "word": "객관적인"
    }, {
      "perceived_negatively": false,
      "word": "꾸준한"
    }, {
      "perceived_negatively": false,
      "word": "논리적인"
    }, {
      "perceived_negatively": false,
      "word": "결단력 있는"
    }, {
      "perceived_negatively": false,
      "word": "poised"
    }, {
      "perceived_negatively": false,
      "word": "간결한"
    }, {
      "perceived_negatively": false,
      "word": "철두철미한"
    }, {
      "perceived_negatively": false,
      "word": "실속있는"
    }, {
      "perceived_negatively": false,
      "word": "자기 수양이된"
    }],
    "Extraversion_plus_Neuroticism_minus": [{
      "perceived_negatively": false,
      "word": "자신감있는"
    }, {
      "perceived_negatively": false,
      "word": "용감한"
    }, {
      "perceived_negatively": false,
      "word": "자신감 있는"
    }, {
      "perceived_negatively": false,
      "word": "거리낌이 없는"
    }, {
      "perceived_negatively": false,
      "word": "용감한"
    }, {
      "perceived_negatively": false,
      "word": "용기있는"
    }, {
      "perceived_negatively": false,
      "word": "자기만족에 빠진"
    }, {
      "perceived_negatively": false,
      "word": "활발한"
    }, {
      "perceived_negatively": false,
      "word": "확고한"
    }],
    "Agreeableness_minus_Extraversion_minus": [{
      "perceived_negatively": true,
      "word": "냉소적인"
    }, {
      "perceived_negatively": true,
      "word": "타인을 조심하는"
    }, {
      "perceived_negatively": true,
      "word": "은둔적인"
    }, {
      "perceived_negatively": true,
      "word": "거리를 두는"
    }, {
      "perceived_negatively": true,
      "word": "인간미없는"
    }, {
      "perceived_negatively": true,
      "word": "침울한"
    }],
    "Neuroticism_minus_Conscientiousness_minus": [{
      "perceived_negatively": false,
      "word": "형식에 얽매이지 않는"
    }, {
      "perceived_negatively": false,
      "word": "절제하는"
    }],
    "Neuroticism_minus_Agreeableness_minus": [{
      "perceived_negatively": true,
      "word": "감정을 드러내지않는"
    }, {
      "perceived_negatively": true,
      "word": "둔감한"
    }, {
      "perceived_negatively": true,
      "word": "애정이 없는"
    }, {
      "perceived_negatively": true,
      "word": "열정없는"
    }],
    "Extraversion_minus_Neuroticism_plus": [{
      "perceived_negatively": false,
      "word": "조심스러운"
    }, {
      "perceived_negatively": false,
      "word": "비관적인"
    }, {
      "perceived_negatively": false,
      "word": "비밀스러운"
    }, {
      "perceived_negatively": true,
      "word": "겁이많은"
    }, {
      "perceived_negatively": false,
      "word": "비밀스러운"
    }],
    "Openness_plus_Extraversion_minus": [{
      "perceived_negatively": false,
      "word": "자기성찰적인"
    }, {
      "perceived_negatively": false,
      "word": "깊은생각에 잠긴"
    }, {
      "perceived_negatively": false,
      "word": "숙고하고 있는"
    }, {
      "perceived_negatively": false,
      "word": "자기반성적인"
    }, {
      "perceived_negatively": false,
      "word": "내부지향적인"
    }],
    "Extraversion_plus_Conscientiousness_minus": [{
      "perceived_negatively": false,
      "word": "활기가 넘치는"
    }, {
      "perceived_negatively": false,
      "word": "짓궃은"
    }, {
      "perceived_negatively": false,
      "word": "과시벽이 있는"
    }, {
      "perceived_negatively": false,
      "word": "남과 어울리기 좋아하는"
    }, {
      "perceived_negatively": false,
      "word": "숨기지 않는"
    }],
    "Conscientiousness_minus_Extraversion_plus": [{
      "perceived_negatively": true,
      "word": "제멋대로 구는"
    }, {
      "perceived_negatively": false,
      "word": "활기가 넘치는"
    }, {
      "perceived_negatively": true,
      "word": "무모한"
    }, {
      "perceived_negatively": true,
      "word": "명랑쾌활한"
    }, {
      "perceived_negatively": false,
      "word": "숨기지 않는"
    }],
    "Openness_plus_Neuroticism_plus": [{
      "perceived_negatively": false,
      "word": "열정을느끼는"
    }, {
      "perceived_negatively": false,
      "word": "흥분을잘하는"
    }, {
      "perceived_negatively": false,
      "word": "감각적인"
    }],
    "Extraversion_plus_Agreeableness_plus": [{
      "perceived_negatively": false,
      "word": "사회적인"
    }, {
      "perceived_negatively": false,
      "word": "활동적인"
    }, {
      "perceived_negatively": false,
      "word": "열광적인"
    }, {
      "perceived_negatively": false,
      "word": "말을 잘하는"
    }, {
      "perceived_negatively": false,
      "word": "활기찬"
    }, {
      "perceived_negatively": false,
      "word": "활발한"
    }, {
      "perceived_negatively": false,
      "word": "대단히 매력적인"
    }, {
      "perceived_negatively": false,
      "word": "열심인"
    }],
    "Neuroticism_plus_Conscientiousness_minus": [{
      "perceived_negatively": true,
      "word": "강박적인"
    }, {
      "perceived_negatively": true,
      "word": "참견하기 좋아하는"
    }, {
      "perceived_negatively": true,
      "word": "제멋대로하는"
    }, {
      "perceived_negatively": true,
      "word": "잘 잊어버리는"
    }, {
      "perceived_negatively": true,
      "word": "충동적인"
    }],
    "Openness_plus_Conscientiousness_minus": [{
      "perceived_negatively": false,
      "word": "관습에 얽매이지 않는"
    }, {
      "perceived_negatively": false,
      "word": "변덕스러운"
    }],
    "Conscientiousness_minus_Extraversion_minus": [{
      "perceived_negatively": true,
      "word": "우유부단한"
    }, {
      "perceived_negatively": true,
      "word": "목적을 잃은"
    }, {
      "perceived_negatively": false,
      "word": "미온적인"
    }, {
      "perceived_negatively": false,
      "word": "애매한"
    }, {
      "perceived_negatively": true,
      "word": "야망이없는"
    }],
    "Neuroticism_plus_Conscientiousness_plus": [{
      "perceived_negatively": false,
      "word": "까다로운"
    }, {
      "perceived_negatively": true,
      "word": "극도로 긴장한"
    }]
  },
  "values": {
    "Self-transcendence": [{
      "Term": "타인을 돕는 것",
      "LowDescription": "귀하는 사람들이 간섭없이 자신의 일을 할 수 있다고 생각합니다",
      "HighDescription": "귀하는 귀하의 주변 사람들을 돌보는 것이 중요하다고 생각합니다"
    }, {
      "Term": "공정함",
      "LowDescription": "귀하는 사람들이 자신의 기회를 만든다고 믿습니다",
      "HighDescription": "귀하는 모든 사람들을 위한 사회 정의와 평등을 믿습니다"
    }, {
      "Term": "사회정의",
      "LowDescription": "귀하는 사람들이 자신의 기회를 만든다고 믿습니다",
      "HighDescription": "귀하는 모든 사람들을 위한 사회 정의와 평등을 믿습니다"
    }, {
      "Term": "공평함",
      "LowDescription": "귀하는 사람들이 자신의 기회를 만든다고 믿습니다",
      "HighDescription": "귀하는 모든 사람들을 위한 사회 정의와 평등을 믿습니다"
    }, {
      "Term": "지역사회봉사",
      "LowDescription": "귀하는 사람들이 간섭없이 자신의 일을 할 수 있다고 생각합니다",
      "HighDescription": "귀하는 귀하의 주변 사람들을 돌보는 것이 중요하다고 생각합니다"
    }],
    "Hedonism": [{
      "Term": "인생의 즐거움을 즐기는 것",
      "LowDescription": "귀하는 단지 개인적인 즐거움보다 더 큰 목적을 가진 활동을 선호합니다",
      "HighDescription": "귀하는 인생을 최대한 즐기기 위해 매우 의욕적입니다"
    }],
    "Conservation": [{
      "Term": "전통",
      "LowDescription": "귀하는 다른 사람들이 한 것을 따르는 것보다 직접 하는 것에 더 신경씁니다",
      "HighDescription": "귀하는 귀하가 소속된 그룹을 매우 존경하고 그들의 지침을 따릅니다"
    }, {
      "Term": "조화",
      "LowDescription": "귀하는 다른 사람들이 생각하는 것이 아닌, 당신의 믿음에 근거하여 올바른 것을 결정합니다",
      "HighDescription": "귀하는 규칙은 이유가 있기 때문에 존재한다는 것을 알고 있으며, 그것을 절대 깨지 않으려고 노력합니다"
    }, {
      "Term": "겸손",
      "LowDescription": "귀하는 다른 사람들이 생각하는 것이 아닌, 당신의 믿음에 근거하여 올바른 것을 결정합니다",
      "HighDescription": "귀하는 다른 사람들을 따를만한 가치가 있음을 알고 있습니다"
    }, {
      "Term": "사회규범",
      "LowDescription": "귀하는 다른 사람들이 생각하는 것이 아닌, 당신의 믿음에 근거하여 올바른 것을 결정합니다",
      "HighDescription": "귀하는 규칙은 이유가 있기 때문에 존재한다는 것을 알고 있으며, 그것을 절대 깨지 않으려고 노력합니다"
    }, {
      "Term": "안보",
      "LowDescription": "귀하는 안보는 다른 목표를 성취하기 위해 희생할 가치가 있다고 믿습니다",
      "HighDescription": "귀하는 안전과 안보은 보호해야 할 중요한 것이라고 믿습니다"
    }, {
      "Term": "안전",
      "LowDescription": "귀하는 보안은 다른 목표를 성취하기 위해 희생할 가치가 있다고 믿습니다",
      "HighDescription": "귀하는 안전과 보안은 보호해야 할 중요한 것이라고 믿습니다"
    }],
    "Self-enhancement": [{
      "Term": "성공 달성",
      "LowDescription": "귀하는 자신의 재능을 과시하는 방법을 거의 고려하지 않고 결정합니다",
      "HighDescription": "귀하는 자기자신을 나아지게 하며 귀하가 유능한 사람임을 입증 할 수있는 기회를 찾으십시오"
    }, {
      "Term": "사회적 지위 획득",
      "LowDescription": "귀하는 귀하의 사회적 지위에 편안하고 그것을 개선할 강한 필요가 있다고 느끼지 않습니다",
      "HighDescription": "귀하는 귀하의 지위와 대중적인 이미지를 개선하는데 상당한 노력을 기울였습니다"
    }, {
      "Term": "야망",
      "LowDescription": "귀하는 귀하의 사회적 지위에 편안하고 그것을 개선할 강한 필요가 있다고 느끼지 않습니다",
      "HighDescription": "귀하는 목표를 향해 나아가는 것이 중요하다고 느낍니다"
    }, {
      "Term": "높은 성취감",
      "LowDescription": "귀하는 자신의 재능을 과시하는 방법을 거의 고려하지 않고 결정합니다",
      "HighDescription": "귀하는 자기자신을 계발하며 귀하가 유능한 사람임을 입증 할 수있는 기회를 찾습니다"
    }],
    "Openness to change": [{
      "Term": "독립",
      "LowDescription": "귀하는 다른 사람들이 귀하의 활동을 지시할 때 기꺼이 받아들입니다",
      "HighDescription": "귀하는 최상의 목표달성 방법을 결정하기 위해 자신의 목표를 설정하는 것을 좋아합니다"
    }, {
      "Term": "흥분",
      "LowDescription": "귀하는 새롭고 위험한 무언가로 시도하는 것보다는 귀하가 선호하여 이미 알고있는 것으로 일을 하고 싶어 합니다",
      "HighDescription": "귀하는 새롭고 흥미진진한 경험을 찾고 싶어합니다"
    }, {
      "Term": "창의성",
      "LowDescription": "귀하는 새롭고 위험한 무언가로 시도하는 것보다는 귀하가 선호하여 이미 알고있는 것으로 일을 하고 싶어 합니다",
      "HighDescription": "귀하는 새롭고 흥미진진한 경험을 찾고 싶어합니다"
    }, {
      "Term": "호기심",
      "LowDescription": "귀하는 새롭고 위험한 무언가로 시도하는 것보다는 귀하가 선호하여 이미 알고있는 것으로 일을 하고 싶어 합니다",
      "HighDescription": "귀하는 새롭고 흥미진진한 경험을 찾고 싶어합니다"
    }, {
      "Term": "자기제어",
      "LowDescription": "귀하는 다른 사람들이 귀하의 활동을 지시할 때 기꺼이 받아들입니다",
      "HighDescription": "귀하는 최상의 목표달성 방법을 결정하기 위해 자신의 목표를 설정하는 것을 좋아합니다"
    }, {
      "Term": "자유",
      "LowDescription": "귀하는 다른 사람들이 귀하의 활동을 지시할 때 기꺼이 받아들입니다",
      "HighDescription": "귀하는 최상의 목표달성 방법을 결정하기 위해 자신의 목표를 설정하는 것을 좋아합니다"
    }]
  }
}

},{}],5:[function(require,module,exports){
module.exports={
  "big5": {
    "big5_openness": {
      "HighDescription": "Intellectually curious, emotionally-aware, sensitive to beauty and willing to try new things.",
      "LowDescription": "Preferring the plain, straightforward, and obvious over the complex, ambiguous, and subtle."
    },
    "big5_conscientiousness": {
      "HighDescription": "More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.",
      "LowDescription": "More likely to prefer the spontaneous over the planned."
    },
    "big5_extraversion": {
      "HighDescription": "More energetic and pronounced engagement with the external world. Likes high group visibility, talking, and asserting themselves.",
      "LowDescription": "Needs less stimulation and are more independent of their social world. It does not mean they are shy, un-friendly, or antisocial."
    },
    "big5_agreeableness": {
      "HighDescription": "Value getting along with others. They have a more optimistic view of human nature.",
      "LowDescription": "Value self interests over others. They are more skeptical of others' motives."
    },
    "big5_neuroticism": {
      "HighDescription": "More likely to have negative emotions or get upset. It could mean they are going through a tough time.",
      "LowDescription": "More calm and less likely to get upset. It does not mean they are positive, or happy people."
    }
  },
  "facets": {
    "facet_intellect": {
      "LowTerm": "Concrete",
      "HighDescription": "You are open to and intrigued by new ideas and love to explore them",
      "HighTerm": "Philosophical",
      "LowDescription": "You prefer dealing with the world as it is, rarely considering abstract ideas",
      "Big5": "big5_openness"
    },
    "facet_gregariousness": {
      "LowTerm": "Independent",
      "HighDescription": "You enjoy being in the company of others",
      "HighTerm": "Sociable",
      "LowDescription": "You have a strong desire to have time to yourself",
      "Big5": "big5_extraversion"
    },
    "facet_achievement_striving": {
      "LowTerm": "Content",
      "HighDescription": "You have high goals for yourself and work hard to achieve them",
      "HighTerm": "Driven",
      "LowDescription": "You are content with your level of accomplishment and do not feel the need to set ambitious goals",
      "Big5": "big5_conscientiousness"
    },
    "facet_depression": {
      "LowTerm": "Content",
      "HighDescription": "You think quite often about the things you are unhappy about",
      "HighTerm": "Melancholy",
      "LowDescription": "You are generally comfortable with yourself as you are",
      "Big5": "big5_neuroticism"
    },
    "facet_sympathy": {
      "LowTerm": "Hardened",
      "HighDescription": "You feel what others feel and are compassionate towards them",
      "HighTerm": "Empathetic",
      "LowDescription": "You think that people should generally rely more on themselves than on other people",
      "Big5": "big5_agreeableness"
    },
    "facet_imagination": {
      "LowTerm": "Down-to-earth",
      "HighDescription": "You have a wild imagination",
      "HighTerm": "Imaginative",
      "LowDescription": "You prefer facts over fantasy",
      "Big5": "big5_openness"
    },
    "facet_self_discipline": {
      "LowTerm": "Intermittent",
      "HighDescription": "You can tackle and stick with tough tasks",
      "HighTerm": "Persistent",
      "LowDescription": "You have a hard time sticking with difficult tasks for a long period of time",
      "Big5": "big5_conscientiousness"
    },
    "facet_assertiveness": {
      "LowTerm": "Demure",
      "HighDescription": "You tend to speak up and take charge of situations, and you are comfortable leading groups",
      "HighTerm": "Assertive",
      "LowDescription": "You prefer to listen than to talk, especially in group situations",
      "Big5": "big5_extraversion"
    },
    "facet_cheerfulness": {
      "LowTerm": "Solemn",
      "HighDescription": "You are a joyful person and share that joy with the world",
      "HighTerm": "Cheerful",
      "LowDescription": "You are generally serious and do not joke much",
      "Big5": "big5_extraversion"
    },
    "facet_self_efficacy": {
      "LowTerm": "Self-doubting",
      "HighDescription": "You feel you have the ability to succeed in the tasks you set out to do",
      "HighTerm": "Self-assured",
      "LowDescription": "You frequently doubt your ability to achieve your goals",
      "Big5": "big5_conscientiousness"
    },
    "facet_morality": {
      "LowTerm": "Compromising",
      "HighDescription": "You think it is wrong to take advantage of others to get ahead",
      "HighTerm": "Uncompromising",
      "LowDescription": "You are comfortable using every trick in the book to get what you want",
      "Big5": "big5_agreeableness"
    },
    "facet_liberalism": {
      "LowTerm": "Respectful of authority",
      "HighDescription": "You prefer to challenge authority and traditional values to help bring about positive changes",
      "HighTerm": "Authority-challenging",
      "LowDescription": "You prefer following with tradition in order to maintain a sense of stability",
      "Big5": "big5_openness"
    },
    "facet_altruism": {
      "LowTerm": "Self-focused",
      "HighDescription": "You feel fulfilled when helping others, and will go out of your way to do so",
      "HighTerm": "Altruistic",
      "LowDescription": "You are more concerned with taking care of yourself than taking time for others",
      "Big5": "big5_agreeableness"
    },
    "facet_self_consciousness": {
      "LowTerm": "Confident",
      "HighDescription": "You are sensitive about what others might be thinking about you",
      "HighTerm": "Self-conscious",
      "LowDescription": "You are hard to embarrass and are self-confident most of the time",
      "Big5": "big5_neuroticism"
    },
    "facet_vulnerability": {
      "LowTerm": "Calm under pressure",
      "HighDescription": "You are easily overwhelmed in stressful situations",
      "HighTerm": "Susceptible to stress",
      "LowDescription": "You handle unexpected events calmly and effectively",
      "Big5": "big5_neuroticism"
    },
    "facet_trust": {
      "LowTerm": "Cautious of others",
      "HighDescription": "You believe the best in others and trust people easily",
      "HighTerm": "Trusting of others",
      "LowDescription": "You are wary of other people's intentions and do not trust easily",
      "Big5": "big5_agreeableness"
    },
    "facet_orderliness": {
      "LowTerm": "Unstructured",
      "HighDescription": "You feel a strong need for structure in your life",
      "HighTerm": "Organized",
      "LowDescription": "You do not make a lot of time for organization in your daily life",
      "Big5": "big5_conscientiousness"
    },
    "facet_anxiety": {
      "LowTerm": "Self-assured",
      "HighDescription": "You tend to worry about things that might happen",
      "HighTerm": "Prone to worry",
      "LowDescription": "You tend to feel calm and self-assured",
      "Big5": "big5_neuroticism"
    },
    "facet_friendliness": {
      "LowTerm": "Reserved",
      "HighDescription": "You make friends easily and feel comfortable around other people",
      "HighTerm": "Outgoing",
      "LowDescription": "You are a private person and don't let many people in",
      "Big5": "big5_extraversion"
    },
    "facet_modesty": {
      "LowTerm": "Proud",
      "HighDescription": "You are uncomfortable being the center of attention",
      "HighTerm": "Modest",
      "LowDescription": "You hold yourself in high regard, satisfied with who you are",
      "Big5": "big5_agreeableness"
    },
    "facet_activity_level": {
      "LowTerm": "Laid-back",
      "HighDescription": "You enjoy a fast-paced, busy schedule with many activities",
      "HighTerm": "Energetic",
      "LowDescription": "You appreciate a relaxed pace in life",
      "Big5": "big5_extraversion"
    },
    "facet_cautiousness": {
      "LowTerm": "Bold",
      "HighDescription": "You carefully think through decisions before making them",
      "HighTerm": "Deliberate",
      "LowDescription": "You would rather take action immediately than spend time deliberating making a decision",
      "Big5": "big5_conscientiousness"
    },
    "facet_dutifulness": {
      "LowTerm": "Carefree",
      "HighDescription": "You take rules and obligations seriously, even when they're inconvenient",
      "HighTerm": "Dutiful",
      "LowDescription": "You do what you want, disregarding rules and obligations",
      "Big5": "big5_conscientiousness"
    },
    "facet_artistic_interests": {
      "LowTerm": "Unconcerned with art",
      "HighDescription": "You enjoy beauty and seek out creative experiences",
      "HighTerm": "Appreciative of art",
      "LowDescription": "You are less concerned with artistic or creative activities than most people who participated in our surveys",
      "Big5": "big5_openness"
    },
    "facet_immoderation": {
      "LowTerm": "Self-controlled",
      "HighDescription": "You feel your desires strongly and are easily tempted by them",
      "HighTerm": "Hedonistic",
      "LowDescription": "You have control over your desires, which are not particularly intense",
      "Big5": "big5_neuroticism"
    },
    "facet_emotionality": {
      "LowTerm": "Dispassionate",
      "HighDescription": "You are aware of your feelings and how to express them",
      "HighTerm": "Emotionally aware",
      "LowDescription": "You do not frequently think about or openly express your emotions",
      "Big5": "big5_openness"
    },
    "facet_adventurousness": {
      "LowTerm": "Consistent",
      "HighDescription": "You are eager to experience new things",
      "HighTerm": "Adventurous",
      "LowDescription": "You enjoy familiar routines and prefer not to deviate from them",
      "Big5": "big5_openness"
    },
    "facet_anger": {
      "LowTerm": "Mild-tempered",
      "HighDescription": "You have a fiery temper, especially when things do not go your way",
      "HighTerm": "Fiery",
      "LowDescription": "It takes a lot to get you angry",
      "Big5": "big5_neuroticism"
    },
    "facet_excitement_seeking": {
      "LowTerm": "Calm-seeking",
      "HighDescription": "You are excited by taking risks and feel bored without lots of action going on",
      "HighTerm": "Excitement-seeking",
      "LowDescription": "You prefer activities that are quiet, calm, and safe",
      "Big5": "big5_extraversion"
    },
    "facet_cooperation": {
      "LowTerm": "Contrary",
      "HighDescription": "You are easy to please and try to avoid confrontation",
      "HighTerm": "Accommodating",
      "LowDescription": "You do not shy away from contradicting others",
      "Big5": "big5_agreeableness"
    }
  },
  "needs": {
    "need_practicality": [
      "efficiency",
      "practicality",
      "high value",
      "convenience"
    ],
    "need_curiosity": [
      "discovery",
      "mastery",
      "gaining knowledge"
    ],
    "need_stability": [
      "stability",
      "authenticity",
      "trustworthiness"
    ],
    "need_self_expression": [
      "self-expression",
      "personal empowerment",
      "personal strength"
    ],
    "need_structure": [
      "organization",
      "straightforwardness",
      "clarity",
      "reliability"
    ],
    "need_challenge": [
      "prestige",
      "competition",
      "glory"
    ],
    "need_liberty": [
      "modernity",
      "expanding possibility",
      "escape",
      "spontaneity",
      "novelty"
    ],
    "need_harmony": [
      "well-being",
      "courtesy",
      "politeness"
    ],
    "need_love": [
      "connectedness",
      "affinity"
    ],
    "need_excitement": [
      "revelry",
      "anticipation",
      "exhiliration"
    ],
    "need_ideal": [
      "sophistication",
      "spirituality",
      "superiority",
      "fulfillment"
    ],
    "need_closeness": [
      "belongingness",
      "nostalgia",
      "intimacy"
    ]
  },
  "phrases": {
    "Experiences that give a sense of %s hold some appeal to you": "Experiences that give a sense of %s hold some appeal to you",
    "You consider %s to guide a large part of what you do": "You consider %s to guide a large part of what you do",
    "You value both %s a bit": "You value both %s a bit",
    "And %s": "And %s",
    "And you are %s": "And you are %s",
    "a bit %s": "a bit %s",
    "can be perceived as %s": "can be perceived as %s",
    "You are relatively unconcerned with both %s and %s": "You are relatively unconcerned with both %s and %s",
    "You are %s and %s": "You are %s and %s",
    "You value both %s and %s a bit": "You value both %s and %s a bit",
    "You don't find %s to be particularly motivating for you": "You don't find %s to be particularly motivating for you",
    "You are %s": "You are %s",
    "You are %s, %s and %s": "You are %s, %s and %s",
    "Your choices are driven by a desire for %s": "Your choices are driven by a desire for %s",
    "You are motivated to seek out experiences that provide a strong feeling of %s": "You are motivated to seek out experiences that provide a strong feeling of %s",
    "Experiences that make you feel high %s are generally unappealing to you": "Experiences that make you feel high %s are generally unappealing to you",
    "You don't find either %s or %s to be particularly motivating for you": "You don't find either %s or %s to be particularly motivating for you",
    "You are relatively unconcerned with %s": "You are relatively unconcerned with %s",
    "somewhat %s": "somewhat %s",
    "You value %s a bit more": "You value %s a bit more",
    "You consider both %s and %s to guide a large part of what you do": "You consider both %s and %s to guide a large part of what you do"
  },
  "traits": {
    "big5_conscientiousness_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "stern"
      },
      {
        "perceived_negatively": false,
        "word": "strict"
      },
      {
        "perceived_negatively": false,
        "word": "rigid"
      }
    ],
    "big5_neuroticism_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "guarded"
      },
      {
        "perceived_negatively": true,
        "word": "fretful"
      },
      {
        "perceived_negatively": true,
        "word": "insecure"
      },
      {
        "perceived_negatively": true,
        "word": "pessimistic"
      },
      {
        "perceived_negatively": false,
        "word": "secretive"
      },
      {
        "perceived_negatively": true,
        "word": "fearful"
      },
      {
        "perceived_negatively": true,
        "word": "negativistic"
      },
      {
        "perceived_negatively": false,
        "word": "self-critical"
      }
    ],
    "big5_agreeableness_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": true,
        "word": "insensitive"
      },
      {
        "perceived_negatively": true,
        "word": "unaffectionate"
      },
      {
        "perceived_negatively": true,
        "word": "passionless"
      },
      {
        "perceived_negatively": true,
        "word": "unemotional"
      }
    ],
    "big5_agreeableness_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "sentimental"
      },
      {
        "perceived_negatively": false,
        "word": "affectionate"
      },
      {
        "perceived_negatively": false,
        "word": "sensitive"
      },
      {
        "perceived_negatively": false,
        "word": "soft"
      },
      {
        "perceived_negatively": false,
        "word": "passionate"
      },
      {
        "perceived_negatively": false,
        "word": "romantic"
      }
    ],
    "big5_conscientiousness_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "informal"
      },
      {
        "perceived_negatively": false,
        "word": "low-key"
      }
    ],
    "big5_agreeableness_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "unpretentious"
      },
      {
        "perceived_negatively": false,
        "word": "self-effacing"
      }
    ],
    "big5_conscientiousness_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "dependable"
      },
      {
        "perceived_negatively": false,
        "word": "responsible"
      },
      {
        "perceived_negatively": false,
        "word": "reliable"
      },
      {
        "perceived_negatively": false,
        "word": "mannerly"
      },
      {
        "perceived_negatively": false,
        "word": "considerate"
      }
    ],
    "big5_agreeableness_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "bullheaded"
      },
      {
        "perceived_negatively": true,
        "word": "abrupt"
      },
      {
        "perceived_negatively": true,
        "word": "crude"
      },
      {
        "perceived_negatively": true,
        "word": "combative"
      },
      {
        "perceived_negatively": true,
        "word": "rough"
      },
      {
        "perceived_negatively": false,
        "word": "sly"
      },
      {
        "perceived_negatively": true,
        "word": "manipulative"
      },
      {
        "perceived_negatively": true,
        "word": "gruff"
      },
      {
        "perceived_negatively": true,
        "word": "devious"
      }
    ],
    "big5_neuroticism_plus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "easily rattled"
      },
      {
        "perceived_negatively": false,
        "word": "easily irked"
      },
      {
        "perceived_negatively": false,
        "word": "apprehensive"
      }
    ],
    "big5_openness_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": true,
        "word": "simple"
      },
      {
        "perceived_negatively": true,
        "word": "dependent"
      }
    ],
    "big5_neuroticism_minus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "imperturbable"
      },
      {
        "perceived_negatively": true,
        "word": "insensitive"
      }
    ],
    "big5_agreeableness_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "inconsiderate"
      },
      {
        "perceived_negatively": true,
        "word": "impolite"
      },
      {
        "perceived_negatively": true,
        "word": "distrustful"
      },
      {
        "perceived_negatively": true,
        "word": "uncooperative"
      },
      {
        "perceived_negatively": true,
        "word": "thoughtless"
      }
    ],
    "big5_extraversion_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "active"
      },
      {
        "perceived_negatively": false,
        "word": "competitive"
      },
      {
        "perceived_negatively": false,
        "word": "persistent"
      },
      {
        "perceived_negatively": false,
        "word": "ambitious"
      },
      {
        "perceived_negatively": false,
        "word": "purposeful"
      }
    ],
    "big5_agreeableness_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "strict"
      },
      {
        "perceived_negatively": false,
        "word": "rigid"
      },
      {
        "perceived_negatively": true,
        "word": "stern"
      }
    ],
    "big5_neuroticism_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "patient"
      },
      {
        "perceived_negatively": false,
        "word": "relaxed"
      },
      {
        "perceived_negatively": false,
        "word": "undemanding"
      },
      {
        "perceived_negatively": false,
        "word": "down-to-earth"
      },
      {
        "perceived_negatively": false,
        "word": "optimistic"
      },
      {
        "perceived_negatively": false,
        "word": "conceitless"
      },
      {
        "perceived_negatively": false,
        "word": "uncritical"
      },
      {
        "perceived_negatively": false,
        "word": "unpretentious"
      }
    ],
    "big5_openness_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "predictable"
      },
      {
        "perceived_negatively": true,
        "word": "unimaginative"
      },
      {
        "perceived_negatively": false,
        "word": "somber"
      },
      {
        "perceived_negatively": true,
        "word": "apathetic"
      },
      {
        "perceived_negatively": true,
        "word": "unadventurous"
      }
    ],
    "big5_extraversion_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": false,
        "word": "opinionated"
      },
      {
        "perceived_negatively": true,
        "word": "forceful"
      },
      {
        "perceived_negatively": true,
        "word": "domineering"
      },
      {
        "perceived_negatively": true,
        "word": "boastful"
      },
      {
        "perceived_negatively": true,
        "word": "bossy"
      },
      {
        "perceived_negatively": false,
        "word": "dominant"
      },
      {
        "perceived_negatively": false,
        "word": "cunning"
      }
    ],
    "big5_neuroticism_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "temperamental"
      },
      {
        "perceived_negatively": true,
        "word": "irritable"
      },
      {
        "perceived_negatively": true,
        "word": "quarrelsome"
      },
      {
        "perceived_negatively": true,
        "word": "impatient"
      },
      {
        "perceived_negatively": true,
        "word": "grumpy"
      },
      {
        "perceived_negatively": true,
        "word": "crabby"
      },
      {
        "perceived_negatively": true,
        "word": "cranky"
      }
    ],
    "big5_neuroticism_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "excitable"
      },
      {
        "perceived_negatively": true,
        "word": "wordy"
      },
      {
        "perceived_negatively": false,
        "word": "flirtatious"
      },
      {
        "perceived_negatively": true,
        "word": "explosive"
      },
      {
        "perceived_negatively": false,
        "word": "extravagant"
      },
      {
        "perceived_negatively": true,
        "word": "volatile"
      }
    ],
    "big5_agreeableness_minus_big5_openness_minus": [
      {
        "perceived_negatively": true,
        "word": "coarse"
      },
      {
        "perceived_negatively": true,
        "word": "tactless"
      },
      {
        "perceived_negatively": true,
        "word": "curt"
      },
      {
        "perceived_negatively": true,
        "word": "narrow-minded"
      },
      {
        "perceived_negatively": true,
        "word": "callous"
      },
      {
        "perceived_negatively": true,
        "word": "ruthless"
      },
      {
        "perceived_negatively": true,
        "word": "uncharitable"
      },
      {
        "perceived_negatively": true,
        "word": "vindictive"
      }
    ],
    "big5_conscientiousness_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "unpretentious"
      },
      {
        "perceived_negatively": false,
        "word": "self-effacing"
      }
    ],
    "big5_agreeableness_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "genial"
      },
      {
        "perceived_negatively": false,
        "word": "tactful"
      },
      {
        "perceived_negatively": false,
        "word": "diplomatic"
      },
      {
        "perceived_negatively": false,
        "word": "deep"
      },
      {
        "perceived_negatively": false,
        "word": "idealistic"
      }
    ],
    "big5_agreeableness_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": true,
        "word": "critical"
      },
      {
        "perceived_negatively": true,
        "word": "selfish"
      },
      {
        "perceived_negatively": true,
        "word": "ill-tempered"
      },
      {
        "perceived_negatively": true,
        "word": "antagonistic"
      },
      {
        "perceived_negatively": true,
        "word": "grumpy"
      },
      {
        "perceived_negatively": true,
        "word": "bitter"
      },
      {
        "perceived_negatively": true,
        "word": "disagreeable"
      },
      {
        "perceived_negatively": true,
        "word": "demanding"
      }
    ],
    "big5_openness_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "imperturbable"
      },
      {
        "perceived_negatively": true,
        "word": "insensitive"
      }
    ],
    "big5_conscientiousness_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "sophisticated"
      },
      {
        "perceived_negatively": false,
        "word": "perfectionistic"
      },
      {
        "perceived_negatively": false,
        "word": "industrious"
      },
      {
        "perceived_negatively": false,
        "word": "dignified"
      },
      {
        "perceived_negatively": false,
        "word": "refined"
      },
      {
        "perceived_negatively": false,
        "word": "cultured"
      },
      {
        "perceived_negatively": false,
        "word": "foresighted"
      }
    ],
    "big5_agreeableness_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "shrewd"
      },
      {
        "perceived_negatively": false,
        "word": "eccentric"
      },
      {
        "perceived_negatively": false,
        "word": "individualistic"
      }
    ],
    "big5_neuroticism_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "excitable"
      },
      {
        "perceived_negatively": false,
        "word": "passionate"
      },
      {
        "perceived_negatively": false,
        "word": "sensual"
      }
    ],
    "big5_neuroticism_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "heartfelt"
      },
      {
        "perceived_negatively": false,
        "word": "versatile"
      },
      {
        "perceived_negatively": false,
        "word": "creative"
      },
      {
        "perceived_negatively": false,
        "word": "intellectual"
      },
      {
        "perceived_negatively": false,
        "word": "insightful"
      }
    ],
    "big5_openness_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "conventional"
      },
      {
        "perceived_negatively": false,
        "word": "traditional"
      }
    ],
    "big5_extraversion_plus_big5_openness_minus": [
      {
        "perceived_negatively": true,
        "word": "verbose"
      },
      {
        "perceived_negatively": true,
        "word": "unscrupulous"
      },
      {
        "perceived_negatively": true,
        "word": "pompous"
      }
    ],
    "big5_extraversion_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "inner-directed"
      },
      {
        "perceived_negatively": false,
        "word": "introspective"
      },
      {
        "perceived_negatively": false,
        "word": "meditative"
      },
      {
        "perceived_negatively": false,
        "word": "contemplating"
      },
      {
        "perceived_negatively": false,
        "word": "self-examining"
      }
    ],
    "big5_openness_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "shortsighted"
      },
      {
        "perceived_negatively": false,
        "word": "foolhardy"
      },
      {
        "perceived_negatively": true,
        "word": "illogical"
      },
      {
        "perceived_negatively": true,
        "word": "immature"
      },
      {
        "perceived_negatively": true,
        "word": "haphazard"
      },
      {
        "perceived_negatively": false,
        "word": "lax"
      },
      {
        "perceived_negatively": true,
        "word": "flippant"
      }
    ],
    "big5_extraversion_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "tranquil"
      },
      {
        "perceived_negatively": false,
        "word": "sedate"
      },
      {
        "perceived_negatively": false,
        "word": "placid"
      },
      {
        "perceived_negatively": false,
        "word": "impartial"
      },
      {
        "perceived_negatively": false,
        "word": "unassuming"
      },
      {
        "perceived_negatively": false,
        "word": "acquiescent"
      }
    ],
    "big5_conscientiousness_plus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "traditional"
      },
      {
        "perceived_negatively": false,
        "word": "conventional"
      }
    ],
    "big5_openness_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "creative"
      },
      {
        "perceived_negatively": false,
        "word": "intellectual"
      },
      {
        "perceived_negatively": false,
        "word": "insightful"
      },
      {
        "perceived_negatively": false,
        "word": "versatile"
      },
      {
        "perceived_negatively": false,
        "word": "inventive"
      }
    ],
    "big5_agreeableness_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "soft-hearted"
      },
      {
        "perceived_negatively": false,
        "word": "agreeable"
      },
      {
        "perceived_negatively": false,
        "word": "obliging"
      },
      {
        "perceived_negatively": false,
        "word": "humble"
      },
      {
        "perceived_negatively": true,
        "word": "lenient"
      }
    ],
    "big5_extraversion_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "indirect"
      },
      {
        "perceived_negatively": true,
        "word": "unenergetic"
      },
      {
        "perceived_negatively": true,
        "word": "sluggish"
      },
      {
        "perceived_negatively": true,
        "word": "nonpersistent"
      },
      {
        "perceived_negatively": true,
        "word": "vague"
      }
    ],
    "big5_openness_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "analytical"
      },
      {
        "perceived_negatively": false,
        "word": "perceptive"
      },
      {
        "perceived_negatively": false,
        "word": "informative"
      },
      {
        "perceived_negatively": false,
        "word": "articulate"
      },
      {
        "perceived_negatively": false,
        "word": "dignified"
      },
      {
        "perceived_negatively": false,
        "word": "cultured"
      }
    ],
    "big5_openness_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "verbose"
      },
      {
        "perceived_negatively": true,
        "word": "unscrupulous"
      },
      {
        "perceived_negatively": true,
        "word": "pompous"
      }
    ],
    "big5_conscientiousness_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "rash"
      },
      {
        "perceived_negatively": true,
        "word": "uncooperative"
      },
      {
        "perceived_negatively": true,
        "word": "unreliable"
      },
      {
        "perceived_negatively": true,
        "word": "distrustful"
      },
      {
        "perceived_negatively": true,
        "word": "thoughtless"
      }
    ],
    "big5_agreeableness_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "generous"
      },
      {
        "perceived_negatively": false,
        "word": "pleasant"
      },
      {
        "perceived_negatively": false,
        "word": "tolerant"
      },
      {
        "perceived_negatively": false,
        "word": "peaceful"
      },
      {
        "perceived_negatively": false,
        "word": "flexible"
      },
      {
        "perceived_negatively": false,
        "word": "easy-going"
      },
      {
        "perceived_negatively": false,
        "word": "fair"
      },
      {
        "perceived_negatively": false,
        "word": "charitable"
      },
      {
        "perceived_negatively": false,
        "word": "trustful"
      }
    ],
    "big5_openness_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": false,
        "word": "shrewd"
      },
      {
        "perceived_negatively": false,
        "word": "eccentric"
      },
      {
        "perceived_negatively": false,
        "word": "individualistic"
      }
    ],
    "big5_conscientiousness_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "ambitious"
      },
      {
        "perceived_negatively": false,
        "word": "alert"
      },
      {
        "perceived_negatively": false,
        "word": "firm"
      },
      {
        "perceived_negatively": false,
        "word": "purposeful"
      },
      {
        "perceived_negatively": false,
        "word": "competitive"
      }
    ],
    "big5_openness_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "idealistic"
      },
      {
        "perceived_negatively": false,
        "word": "diplomatic"
      },
      {
        "perceived_negatively": false,
        "word": "deep"
      },
      {
        "perceived_negatively": false,
        "word": "tactful"
      },
      {
        "perceived_negatively": false,
        "word": "genial"
      }
    ],
    "big5_conscientiousness_minus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "foolhardy"
      },
      {
        "perceived_negatively": true,
        "word": "illogical"
      },
      {
        "perceived_negatively": true,
        "word": "immature"
      },
      {
        "perceived_negatively": true,
        "word": "haphazard"
      },
      {
        "perceived_negatively": false,
        "word": "lax"
      },
      {
        "perceived_negatively": true,
        "word": "flippant"
      }
    ],
    "big5_conscientiousness_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "particular"
      },
      {
        "perceived_negatively": true,
        "word": "high-strung"
      }
    ],
    "big5_neuroticism_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "unselfconscious"
      },
      {
        "perceived_negatively": false,
        "word": "weariless"
      },
      {
        "perceived_negatively": false,
        "word": "indefatigable"
      }
    ],
    "big5_openness_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "coarse"
      },
      {
        "perceived_negatively": true,
        "word": "tactless"
      },
      {
        "perceived_negatively": true,
        "word": "curt"
      },
      {
        "perceived_negatively": true,
        "word": "narrow-minded"
      },
      {
        "perceived_negatively": true,
        "word": "callous"
      }
    ],
    "big5_neuroticism_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "emotional"
      },
      {
        "perceived_negatively": true,
        "word": "gullible"
      },
      {
        "perceived_negatively": false,
        "word": "affectionate"
      },
      {
        "perceived_negatively": false,
        "word": "sensitive"
      },
      {
        "perceived_negatively": false,
        "word": "soft"
      }
    ],
    "big5_extraversion_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "unaggressive"
      },
      {
        "perceived_negatively": false,
        "word": "humble"
      },
      {
        "perceived_negatively": false,
        "word": "submissive"
      },
      {
        "perceived_negatively": false,
        "word": "timid"
      },
      {
        "perceived_negatively": false,
        "word": "compliant"
      },
      {
        "perceived_negatively": false,
        "word": "naïve"
      }
    ],
    "big5_agreeableness_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "effervescent"
      },
      {
        "perceived_negatively": false,
        "word": "happy"
      },
      {
        "perceived_negatively": false,
        "word": "friendly"
      },
      {
        "perceived_negatively": false,
        "word": "merry"
      },
      {
        "perceived_negatively": false,
        "word": "jovial"
      },
      {
        "perceived_negatively": false,
        "word": "humorous"
      }
    ],
    "big5_openness_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "worldly"
      },
      {
        "perceived_negatively": false,
        "word": "theatrical"
      },
      {
        "perceived_negatively": false,
        "word": "eloquent"
      },
      {
        "perceived_negatively": false,
        "word": "inquisitive"
      },
      {
        "perceived_negatively": false,
        "word": "intense"
      }
    ],
    "big5_extraversion_minus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "somber"
      },
      {
        "perceived_negatively": true,
        "word": "meek"
      },
      {
        "perceived_negatively": true,
        "word": "unadventurous"
      },
      {
        "perceived_negatively": false,
        "word": "passive"
      },
      {
        "perceived_negatively": true,
        "word": "apathetic"
      },
      {
        "perceived_negatively": false,
        "word": "docile"
      }
    ],
    "big5_extraversion_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "restrained"
      },
      {
        "perceived_negatively": false,
        "word": "serious"
      },
      {
        "perceived_negatively": false,
        "word": "discreet"
      },
      {
        "perceived_negatively": false,
        "word": "cautious"
      },
      {
        "perceived_negatively": false,
        "word": "principled"
      }
    ],
    "big5_neuroticism_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "unassuming"
      },
      {
        "perceived_negatively": true,
        "word": "unexcitable"
      },
      {
        "perceived_negatively": false,
        "word": "placid"
      },
      {
        "perceived_negatively": false,
        "word": "tranquil"
      }
    ],
    "big5_extraversion_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "explosive"
      },
      {
        "perceived_negatively": true,
        "word": "wordy"
      },
      {
        "perceived_negatively": false,
        "word": "extravagant"
      },
      {
        "perceived_negatively": true,
        "word": "volatile"
      },
      {
        "perceived_negatively": false,
        "word": "flirtatious"
      }
    ],
    "big5_extraversion_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "expressive"
      },
      {
        "perceived_negatively": false,
        "word": "candid"
      },
      {
        "perceived_negatively": false,
        "word": "dramatic"
      },
      {
        "perceived_negatively": false,
        "word": "spontaneous"
      },
      {
        "perceived_negatively": false,
        "word": "witty"
      },
      {
        "perceived_negatively": false,
        "word": "opportunistic"
      },
      {
        "perceived_negatively": false,
        "word": "independent"
      }
    ],
    "big5_conscientiousness_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "unconventional"
      },
      {
        "perceived_negatively": false,
        "word": "quirky"
      }
    ],
    "big5_extraversion_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": false,
        "word": "skeptical"
      },
      {
        "perceived_negatively": false,
        "word": "wary of others"
      },
      {
        "perceived_negatively": true,
        "word": "seclusive"
      },
      {
        "perceived_negatively": true,
        "word": "uncommunicative"
      },
      {
        "perceived_negatively": true,
        "word": "unsociable"
      },
      {
        "perceived_negatively": true,
        "word": "glum"
      },
      {
        "perceived_negatively": true,
        "word": "detached"
      },
      {
        "perceived_negatively": false,
        "word": "aloof"
      }
    ],
    "big5_conscientiousness_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": true,
        "word": "scatterbrained"
      },
      {
        "perceived_negatively": true,
        "word": "inconsistent"
      },
      {
        "perceived_negatively": true,
        "word": "erratic"
      },
      {
        "perceived_negatively": true,
        "word": "forgetful"
      },
      {
        "perceived_negatively": true,
        "word": "impulsive"
      },
      {
        "perceived_negatively": true,
        "word": "frivolous"
      }
    ],
    "big5_conscientiousness_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "thorough"
      },
      {
        "perceived_negatively": false,
        "word": "steady"
      },
      {
        "perceived_negatively": false,
        "word": "consistent"
      },
      {
        "perceived_negatively": false,
        "word": "self-disciplined"
      },
      {
        "perceived_negatively": false,
        "word": "logical"
      },
      {
        "perceived_negatively": false,
        "word": "decisive"
      },
      {
        "perceived_negatively": false,
        "word": "controlled"
      },
      {
        "perceived_negatively": false,
        "word": "concise"
      }
    ],
    "big5_openness_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "easily rattled"
      },
      {
        "perceived_negatively": false,
        "word": "easily irked"
      },
      {
        "perceived_negatively": false,
        "word": "apprehensive"
      }
    ],
    "big5_agreeableness_plus_big5_openness_minus": [
      {
        "perceived_negatively": true,
        "word": "dependent"
      },
      {
        "perceived_negatively": true,
        "word": "simple"
      }
    ],
    "big5_conscientiousness_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "cautious"
      },
      {
        "perceived_negatively": false,
        "word": "confident"
      },
      {
        "perceived_negatively": false,
        "word": "punctual"
      },
      {
        "perceived_negatively": false,
        "word": "formal"
      },
      {
        "perceived_negatively": false,
        "word": "thrifty"
      },
      {
        "perceived_negatively": false,
        "word": "principled"
      }
    ],
    "big5_agreeableness_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "helpful"
      },
      {
        "perceived_negatively": false,
        "word": "cooperative"
      },
      {
        "perceived_negatively": false,
        "word": "considerate"
      },
      {
        "perceived_negatively": false,
        "word": "respectful"
      },
      {
        "perceived_negatively": false,
        "word": "polite"
      },
      {
        "perceived_negatively": false,
        "word": "reasonable"
      },
      {
        "perceived_negatively": false,
        "word": "courteous"
      },
      {
        "perceived_negatively": false,
        "word": "thoughtful"
      },
      {
        "perceived_negatively": false,
        "word": "loyal"
      },
      {
        "perceived_negatively": false,
        "word": "moral"
      }
    ],
    "big5_neuroticism_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "rational"
      },
      {
        "perceived_negatively": false,
        "word": "objective"
      },
      {
        "perceived_negatively": false,
        "word": "steady"
      },
      {
        "perceived_negatively": false,
        "word": "logical"
      },
      {
        "perceived_negatively": false,
        "word": "decisive"
      },
      {
        "perceived_negatively": false,
        "word": "poised"
      },
      {
        "perceived_negatively": false,
        "word": "concise"
      },
      {
        "perceived_negatively": false,
        "word": "thorough"
      },
      {
        "perceived_negatively": false,
        "word": "economical"
      },
      {
        "perceived_negatively": false,
        "word": "self-disciplined"
      }
    ],
    "big5_extraversion_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "confident"
      },
      {
        "perceived_negatively": false,
        "word": "bold"
      },
      {
        "perceived_negatively": false,
        "word": "assured"
      },
      {
        "perceived_negatively": false,
        "word": "uninhibited"
      },
      {
        "perceived_negatively": false,
        "word": "courageous"
      },
      {
        "perceived_negatively": false,
        "word": "brave"
      },
      {
        "perceived_negatively": false,
        "word": "self-satisfied"
      },
      {
        "perceived_negatively": false,
        "word": "vigorous"
      },
      {
        "perceived_negatively": false,
        "word": "strong"
      }
    ],
    "big5_agreeableness_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": true,
        "word": "cynical"
      },
      {
        "perceived_negatively": true,
        "word": "wary of others"
      },
      {
        "perceived_negatively": true,
        "word": "seclusive"
      },
      {
        "perceived_negatively": true,
        "word": "detached"
      },
      {
        "perceived_negatively": true,
        "word": "impersonal"
      },
      {
        "perceived_negatively": true,
        "word": "glum"
      }
    ],
    "big5_neuroticism_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "informal"
      },
      {
        "perceived_negatively": false,
        "word": "low-key"
      }
    ],
    "big5_neuroticism_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "unemotional"
      },
      {
        "perceived_negatively": true,
        "word": "insensitive"
      },
      {
        "perceived_negatively": true,
        "word": "unaffectionate"
      },
      {
        "perceived_negatively": true,
        "word": "passionless"
      }
    ],
    "big5_extraversion_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "guarded"
      },
      {
        "perceived_negatively": false,
        "word": "pessimistic"
      },
      {
        "perceived_negatively": false,
        "word": "secretive"
      },
      {
        "perceived_negatively": true,
        "word": "cowardly"
      },
      {
        "perceived_negatively": false,
        "word": "secretive"
      }
    ],
    "big5_openness_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "introspective"
      },
      {
        "perceived_negatively": false,
        "word": "meditative"
      },
      {
        "perceived_negatively": false,
        "word": "contemplating"
      },
      {
        "perceived_negatively": false,
        "word": "self-examining"
      },
      {
        "perceived_negatively": false,
        "word": "inner-directed"
      }
    ],
    "big5_extraversion_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "boisterous"
      },
      {
        "perceived_negatively": false,
        "word": "mischievous"
      },
      {
        "perceived_negatively": false,
        "word": "exhibitionistic"
      },
      {
        "perceived_negatively": false,
        "word": "gregarious"
      },
      {
        "perceived_negatively": false,
        "word": "demonstrative"
      }
    ],
    "big5_conscientiousness_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "unruly"
      },
      {
        "perceived_negatively": false,
        "word": "boisterous"
      },
      {
        "perceived_negatively": true,
        "word": "reckless"
      },
      {
        "perceived_negatively": true,
        "word": "devil-may-care"
      },
      {
        "perceived_negatively": false,
        "word": "demonstrative"
      }
    ],
    "big5_openness_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "passionate"
      },
      {
        "perceived_negatively": false,
        "word": "excitable"
      },
      {
        "perceived_negatively": false,
        "word": "sensual"
      }
    ],
    "big5_extraversion_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "social"
      },
      {
        "perceived_negatively": false,
        "word": "energetic"
      },
      {
        "perceived_negatively": false,
        "word": "enthusiastic"
      },
      {
        "perceived_negatively": false,
        "word": "communicative"
      },
      {
        "perceived_negatively": false,
        "word": "vibrant"
      },
      {
        "perceived_negatively": false,
        "word": "spirited"
      },
      {
        "perceived_negatively": false,
        "word": "magnetic"
      },
      {
        "perceived_negatively": false,
        "word": "zestful"
      }
    ],
    "big5_neuroticism_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "compulsive"
      },
      {
        "perceived_negatively": true,
        "word": "nosey"
      },
      {
        "perceived_negatively": true,
        "word": "self-indulgent"
      },
      {
        "perceived_negatively": true,
        "word": "forgetful"
      },
      {
        "perceived_negatively": true,
        "word": "impulsive"
      }
    ],
    "big5_openness_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "unconventional"
      },
      {
        "perceived_negatively": false,
        "word": "quirky"
      }
    ],
    "big5_conscientiousness_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": true,
        "word": "indecisive"
      },
      {
        "perceived_negatively": true,
        "word": "aimless"
      },
      {
        "perceived_negatively": false,
        "word": "wishy-washy"
      },
      {
        "perceived_negatively": false,
        "word": "noncommittal"
      },
      {
        "perceived_negatively": true,
        "word": "unambitious"
      }
    ],
    "big5_neuroticism_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "particular"
      },
      {
        "perceived_negatively": true,
        "word": "high-strung"
      }
    ]
  },
  "values": {
    "value_self_transcendence": [
      {
        "Term": "Helping others",
        "LowDescription": "You think people can handle their own business without interference",
        "HighDescription": "You think it is important to take care of the people around you"
      },
      {
        "Term": "Fairness",
        "LowDescription": "You believe that people create their own opportunities",
        "HighDescription": "You believe in social justice and equality for all"
      },
      {
        "Term": "Social justice",
        "LowDescription": "You believe that people create their own opportunities",
        "HighDescription": "You believe in social justice and equality for all"
      },
      {
        "Term": "Equality",
        "LowDescription": "You believe that people create their own opportunities",
        "HighDescription": "You believe in social justice and equality for all"
      },
      {
        "Term": "Community service",
        "LowDescription": "You think people can handle their own business without interference",
        "HighDescription": "You think it is important to take care of the people around you"
      }
    ],
    "value_hedonism": [
      {
        "Term": "Taking pleasure in life",
        "LowDescription": "You prefer activities with a purpose greater than just personal enjoyment",
        "HighDescription": "You are highly motivated to enjoy life to its fullest"
      }
    ],
    "value_conservation": [
      {
        "Term": "Tradition",
        "LowDescription": "You care more about making your own path than following what others have done",
        "HighDescription": "You highly respect the groups you belong to and follow their guidance"
      },
      {
        "Term": "Harmony",
        "LowDescription": "You decide what is right based on your beliefs, not what other people think",
        "HighDescription": "You know rules are there for a reason, and you try never to break them"
      },
      {
        "Term": "Humility",
        "LowDescription": "You decide what is right based on your beliefs, not what other people think",
        "HighDescription": "You see worth in deferring to others"
      },
      {
        "Term": "Social norms",
        "LowDescription": "You decide what is right based on your beliefs, not what other people think",
        "HighDescription": "You know rules are there for a reason, and you try never to break them"
      },
      {
        "Term": "Security",
        "LowDescription": "You believe that security is worth sacrificing to achieve other goals",
        "HighDescription": "You believe that safety and security are important things to safeguard"
      },
      {
        "Term": "Safety",
        "LowDescription": "You believe that safety is worth sacrificing to achieve other goals",
        "HighDescription": "You believe that safety and security are important things to safeguard"
      }
    ],
    "value_self_enhancement": [
      {
        "Term": "Achieving success",
        "LowDescription": "You make decisions with little regard for how they show off your talents",
        "HighDescription": "You seek out opportunities to improve yourself and demonstrate that you are a capable person"
      },
      {
        "Term": "Gaining social status",
        "LowDescription": "You are comfortable with your social status and don't feel a strong need to improve it",
        "HighDescription": "You put substantial effort into improving your status and public image"
      },
      {
        "Term": "Ambition",
        "LowDescription": "You are comfortable with your social status and don't feel a strong need to improve it",
        "HighDescription": "You feel it is important to push forward towards goals"
      },
      {
        "Term": "High achievement",
        "LowDescription": "You make decisions with little regard for how they show off your talents",
        "HighDescription": "You seek out opportunities to improve yourself and demonstrate that you are a capable person"
      }
    ],
    "value_openness_to_change": [
      {
        "Term": "Independence",
        "LowDescription": "You welcome when others direct your activities for you",
        "HighDescription": "You like to set your own goals to decide how to best achieve them"
      },
      {
        "Term": "Excitement",
        "LowDescription": "You would rather stick with things you already know you like than risk trying something new and risky",
        "HighDescription": "You are eager to search out new and exciting experiences"
      },
      {
        "Term": "Creativity",
        "LowDescription": "You would rather stick with things you already know you like than risk trying something new and risky",
        "HighDescription": "You are eager to search out new and exciting experiences"
      },
      {
        "Term": "Curiosity",
        "LowDescription": "You would rather stick with things you already know you like than risk trying something new and risky",
        "HighDescription": "You are eager to search out new and exciting experiences"
      },
      {
        "Term": "Self-direction",
        "LowDescription": "You welcome when others direct your activities for you",
        "HighDescription": "You like to set your own goals to decide how to best achieve them"
      },
      {
        "Term": "Freedom",
        "LowDescription": "You welcome when others direct your activities for you",
        "HighDescription": "You like to set your own goals to decide how to best achieve them"
      }
    ]
  }
}

},{}],6:[function(require,module,exports){
module.exports={
  "big5": {
    "big5_openness": {
      "HighDescription": "Intelectualmente curiosos, emocionalmente conscientes, sensibles a la belleza, y deseosos por probar cosas nuevas.",
      "LowDescription": "Prefieren lo común, directo, y obvio, frente a lo complicado, ambiguo y sutil."
    },
    "big5_conscientiousness": {
      "HighDescription": "Auto-disciplinados, conscientes de sus deberes, o tendientes a querer alcanzar logros por encima de las medidas o expectativas externas.",
      "LowDescription": "Más propensos a preferir lo espontáneo por sobre lo planificado."
    },
    "big5_extraversion": {
      "HighDescription": "Más enérgico y marcado compromiso con el mundo externo. Les gusta la alta visibilidad en grupos, hablar y demostrarse a si mismos.",
      "LowDescription": "Necesitan menos estimulación y son más independientes de su mundo social. No significa que sean tímidos, no amistosos, o antisociales."
    },
    "big5_agreeableness": {
      "HighDescription": "Valoran llevarse bien con otros. Tienen una visión más optimista de la naturaleza humana.",
      "LowDescription": "Valoran sus propios intereses por sobre los de otros. Son más escépticos de los motivos de los demás."
    },
    "big5_neuroticism": {
      "HighDescription": "Más promensos a tener emociones negativas o disgustarse. Puede significar que estén pasando por un mañ momento.",
      "LowDescription": "Más calmos y menos probables a disgustarse o alterarse. Esto no significa que sean gente positiva o feliz."
    }
  },
  "facets": {
    "facet_intellect": {
      "LowTerm": "Concreto",
      "HighDescription": "Está abierto a nuevas ideas, le intrigan y ama explorarlas",
      "HighTerm": "Filosófico",
      "LowDescription": "Prefiere lidiar con el mundo tal cual es, raramente considerando ideas abstractas",
      "Big5": "big5_openness"
    },
    "facet_gregariousness": {
      "LowTerm": "Independiente",
      "HighDescription": "Disfruta estando en compañía de otros",
      "HighTerm": "Sociable",
      "LowDescription": "Tiene un fuerte deseo de tener tiempo para usted mismo",
      "Big5": "big5_extraversion"
    },
    "facet_achievement_striving": {
      "LowTerm": "Una persona satisfecha",
      "HighDescription": "Se propone grandes metas y trabaja duro para alcanzarlas",
      "HighTerm": "Una persona motivada",
      "LowDescription": "Está conforme con sus logros y no siente la necesidad de ponerse metas más ambiciosas",
      "Big5": "big5_conscientiousness"
    },
    "facet_depression": {
      "LowTerm": "Una persona satisfecha",
      "HighDescription": "Piensa bastante seguido en las cosas con las que está disconforme",
      "HighTerm": "Melancólico",
      "LowDescription": "Generalmente se acepta a usted mismo tal cual es",
      "Big5": "big5_neuroticism"
    },
    "facet_liberalism": {
      "LowTerm": "Respetuoso de la autoridad",
      "HighDescription": "Prefiere desafiar a la autoridad y  a los valores tradicionales para lograr cambios positivos",
      "HighTerm": "Desafiante ante la autoridad",
      "LowDescription": "Prefiere seguir tradiciones para mantener una sensación de estabilidad",
      "Big5": "big5_openness"
    },
    "facet_sympathy": {
      "LowTerm": "Una persona de gran fortaleza",
      "HighDescription": "Siente lo que otros sienten y es compasivo con ellos",
      "HighTerm": "Empático",
      "LowDescription": "Cree que las personas deberían confiar más en sí mismos que en otras personas",
      "Big5": "big5_agreeableness"
    },
    "facet_imagination": {
      "LowTerm": "Una persona con los pies en la tierra",
      "HighDescription": "Su imaginación vuela libre",
      "HighTerm": "Imaginativo",
      "LowDescription": "Prefiere hechos antes que la fantasía",
      "Big5": "big5_openness"
    },
    "facet_self_discipline": {
      "LowTerm": "Intermitente",
      "HighDescription": "Puede hacer frente y llevar a cabo tareas difíciles",
      "HighTerm": "Persistente",
      "LowDescription": "Le da trabajo llevar adelante tareas difíciles por un largo periodo de tiempo",
      "Big5": "big5_conscientiousness"
    },
    "facet_assertiveness": {
      "LowTerm": "Callado",
      "HighDescription": "Tiende a expresarse y a hacerse cargo de las situaciones, y se encuentra cómodo liderando grupos",
      "HighTerm": "Asertivo",
      "LowDescription": "Prefiere escuchar antes que hablar, especialmente en situaciones de grupo",
      "Big5": "big5_extraversion"
    },
    "facet_cheerfulness": {
      "LowTerm": "Solemne",
      "HighDescription": "Es una persona alegre y comparte esa alegría con el mundo",
      "HighTerm": "Alegre",
      "LowDescription": "Generalmente es serio y no hace muchas bromas",
      "Big5": "big5_extraversion"
    },
    "facet_self_efficacy": {
      "LowTerm": "Inseguro de sí misma",
      "HighDescription": "Siente que tiene la habilidad de triunfar en las tareas que se propone realizar",
      "HighTerm": "Seguro de sí mismo",
      "LowDescription": "Frecuentemente duda acerca de su habilidad para alcanzar sus metas",
      "Big5": "big5_conscientiousness"
    },
    "facet_morality": {
      "LowTerm": "Una persona comprometida",
      "HighDescription": "Piensa que está mal tomar ventaja de los demás para avanzar",
      "HighTerm": "Intransigente",
      "LowDescription": "Utiliza cualquier medio posible para conseguir lo que quiere y está cómodo con ello",
      "Big5": "big5_agreeableness"
    },
    "facet_anxiety": {
      "LowTerm": "Seguro de sí mismo",
      "HighDescription": "Tiende a preocuparse acerca de las cosas que podrían pasar",
      "HighTerm": "Propenso a preocuparse",
      "LowDescription": "Tiende a sentirse tranquilo y a confiar en sí mismo",
      "Big5": "big5_neuroticism"
    },
    "facet_altruism": {
      "LowTerm": "Individualista",
      "HighDescription": "Se siente realizado ayudando a otros y dejará sus cosas de lado para hacerlo",
      "HighTerm": "Altruista",
      "LowDescription": "Está más enfocado en cuidar de usted mismo que en dedicar tiempo a otras personas",
      "Big5": "big5_agreeableness"
    },
    "facet_self_consciousness": {
      "LowTerm": "Confiado",
      "HighDescription": "Es sensible a lo que las demás personas podrían estar pensando acerca de usted",
      "HighTerm": "Consciente de sí mismo",
      "LowDescription": "Es difícil de avergonzar y confía en sí mismo la mayor parte del tiempo",
      "Big5": "big5_neuroticism"
    },
    "facet_vulnerability": {
      "LowTerm": "Una persona que mantiene la calma bajo presión",
      "HighDescription": "Se abruma fácilmente en situaciones de estrés",
      "HighTerm": "Susceptible al estrés",
      "LowDescription": "Maneja eventos inesperados con calma y efectivamente",
      "Big5": "big5_neuroticism"
    },
    "facet_trust": {
      "LowTerm": "Cuidadoso con los demás",
      "HighDescription": "Cree lo mejor de los demás y confía fácilmente en las personas",
      "HighTerm": "Una persona que confía en los demás",
      "LowDescription": "Se cuida de las intenciones de los demás y no confía fácilmente",
      "Big5": "big5_agreeableness"
    },
    "facet_orderliness": {
      "LowTerm": "Desestructurado",
      "HighDescription": "Siente una fuerte necesidad de mantener una vida estructurada",
      "HighTerm": "Organizado",
      "LowDescription": "No le dedica mucho tiempo a organizarse en su vida diaria",
      "Big5": "big5_conscientiousness"
    },
    "facet_friendliness": {
      "LowTerm": "Reservado",
      "HighDescription": "Hace amigos fácilmente y se siente cómodo estando con otras personas",
      "HighTerm": "Extrovertido",
      "LowDescription": "Es una persona reservada y no deja a muchas personas entrar",
      "Big5": "big5_extraversion"
    },
    "facet_modesty": {
      "LowTerm": "Orgulloso",
      "HighDescription": "Se siente cómodo siendo el centro de atención",
      "HighTerm": "Modesto",
      "LowDescription": "Se tiene una estima alta, se encuentra satisfecho con quién es",
      "Big5": "big5_agreeableness"
    },
    "facet_activity_level": {
      "LowTerm": "Relajado",
      "HighDescription": "Disfruta llevar un ritmo de vida acelerado, una agenda ocupada con muchas actividades",
      "HighTerm": "Energético",
      "LowDescription": "Aprecia llevar un ritmo de vida relajado",
      "Big5": "big5_extraversion"
    },
    "facet_cautiousness": {
      "LowTerm": "Audaz",
      "HighDescription": "Piensa cuidadosamente acerca de sus decisiones antes de tomarlas",
      "HighTerm": "Prudente",
      "LowDescription": "Prefiere tomar acción inmediatamente antes que invertir tiempo deliberando qué decisión tomar",
      "Big5": "big5_conscientiousness"
    },
    "facet_dutifulness": {
      "LowTerm": "Despreocupado",
      "HighDescription": "Toma las reglas y las obligaciones seriamente, aún cuando son inconvenientes",
      "HighTerm": "Una persona que cumple con su deber",
      "LowDescription": "Hace lo que quiere sin importar las reglas y las obligaciones",
      "Big5": "big5_conscientiousness"
    },
    "facet_artistic_interests": {
      "LowTerm": "Una persona desinteresada por el arte",
      "HighDescription": "Disfruta de la belleza y busca experiencias creativas",
      "HighTerm": "Una persona que aprecia el arte",
      "LowDescription": "Le interesan menos las actividades artísticas o creativas que la mayoría de las personas que participaron de nuestras encuestas",
      "Big5": "big5_openness"
    },
    "facet_immoderation": {
      "LowTerm": "Sereno",
      "HighDescription": "Siente fuertemente sus deseos y es fácilmente tentado por ellos",
      "HighTerm": "Hedonista",
      "LowDescription": "Controla sus deseos, los cuales no son particularmente intensos",
      "Big5": "big5_neuroticism"
    },
    "facet_emotionality": {
      "LowTerm": "Desapasionado",
      "HighDescription": "Es consciente de sus sentimientos y de cómo expresarlos",
      "HighTerm": "Emocionalmente consciente",
      "LowDescription": "No piensa frecuentemente acerca de sus emociones ni las expresa abiertamente",
      "Big5": "big5_openness"
    },
    "facet_adventurousness": {
      "LowTerm": "Consistente",
      "HighDescription": "Está deseoso de tener nuevas experiencias",
      "HighTerm": "Audaz",
      "LowDescription": "Disfruta de las rutinas familiares y prefiere no desviarse de ellas",
      "Big5": "big5_openness"
    },
    "facet_anger": {
      "LowTerm": "Apacible",
      "HighDescription": "Tiene un temperamento fuerte, especialmente cuando las cosas no funcionan como espera",
      "HighTerm": "Intenso",
      "LowDescription": "Es difícil hacerle enojar",
      "Big5": "big5_neuroticism"
    },
    "facet_excitement_seeking": {
      "LowTerm": "Una persona que busca la calma",
      "HighDescription": "Le emociona tomar riesgos y se aburre si no se ve envuelto en mucha acción",
      "HighTerm": "Una persona que busca la emoción",
      "LowDescription": "Prefiere las actividades tranquilas, pacíficas y seguras",
      "Big5": "big5_extraversion"
    },
    "facet_cooperation": {
      "LowTerm": "Contrario",
      "HighDescription": "Es fácil de complacer e intenta evitar posibles confrontaciones",
      "HighTerm": "Acomodaticio",
      "LowDescription": "No te importa contradecir a los demás",
      "Big5": "big5_agreeableness"
    }
  },
  "needs": {
    "need_practicality": [
      "eficiencia",
      "practicidad",
      "valor agregado",
      "conveniencia"
    ],
    "need_curiosity": [
      "descubrimiento",
      "maestría",
      "adquisición de conocimiento"
    ],
    "need_stability": [
      "estabilidad",
      "autenticidad",
      "integridad"
    ],
    "need_self_expression": [
      "auto-expresión",
      "empoderamiento personal",
      "fortaleza personal"
    ],
    "need_structure": [
      "organización",
      "franqueza",
      "claridad",
      "confiabilidad"
    ],
    "need_challenge": [
      "prestigio",
      "competencia",
      "gloria"
    ],
    "need_liberty": [
      "modernidad",
      "expansión de posibilidades",
      "poder escapar",
      "espontaneidad",
      "novedad"
    ],
    "need_harmony": [
      "bienestar",
      "cortesía",
      "civilidad"
    ],
    "need_love": [
      "afinidad",
      "conexión"
    ],
    "need_excitement": [
      "regocijo",
      "anticipación",
      "cebración"
    ],
    "need_ideal": [
      "sofisticación",
      "espiritualidad",
      "superioridad",
      "realización"
    ],
    "need_closeness": [
      "pertenencia",
      "nostalgia",
      "intimidad"
    ]
  },
  "phrases": {
    "Experiences that give a sense of %s hold some appeal to you": "Le agradan las experiencias que le dan una sensación de %s",
    "You consider %s to guide a large part of what you do": "Usted considera que %s lo guia en gran parte de lo que hace",
    "You value both %s a bit": "Usted valora a %s un poco",
    "And %s": "Y %s",
    "And you are %s": "Y usted es %s",
    "a bit %s": "un poco %s",
    "can be perceived as %s": "puede ser percibido como %s",
    "You are relatively unconcerned with both %s and %s": "Usted es relativamente indiferente con %s y %s",
    "You are %s and %s": "Usted es %s y %s",
    "You value both %s and %s a bit": "Usted valora a %s y %s un poco",
    "You don't find %s to be particularly motivating for you": "Usted no encuentra a %s particularmente motivante para usted",
    "You are %s": "Usted es %s",
    "You are %s, %s and %s": "Usted es %s, %s y %s",
    "You are motivated to seek out experiences that provide a strong feeling of %s": "Está motivado a buscar experiencias que lo provean de una fuerte sensación de %s",
    "Experiences that make you feel high %s are generally unappealing to you": "No le agradan las experiencias que le dan una gran sensación de %s",
    "You don't find either %s or %s to be particularly motivating for you": "Usted no encuentra a %s o %s particularmente motivantes para usted",
    "You are relatively unconcerned with %s": "Usted es relativamente indiferente con %s",
    "somewhat %s": "algo %s",
    "Your choices are driven by a desire for %s": "Sus elecciones están determinadas por un deseo de %s",
    "You consider both %s and %s to guide a large part of what you do": "Usted considera que %s y %s lo guian en gran parte de lo que hace"
  },
  "traits": {
    "big5_conscientiousness_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "inflexible"
      },
      {
        "perceived_negatively": false,
        "word": "estricto"
      },
      {
        "perceived_negatively": false,
        "word": "rígido"
      }
    ],
    "big5_neuroticism_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "guardado"
      },
      {
        "perceived_negatively": true,
        "word": "irritable"
      },
      {
        "perceived_negatively": true,
        "word": "inseguro"
      },
      {
        "perceived_negatively": true,
        "word": "pesimista"
      },
      {
        "perceived_negatively": false,
        "word": "reservado"
      },
      {
        "perceived_negatively": true,
        "word": "temeroso"
      },
      {
        "perceived_negatively": true,
        "word": "negativo"
      },
      {
        "perceived_negatively": false,
        "word": "auto-crítico"
      }
    ],
    "big5_agreeableness_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": true,
        "word": "insensible"
      },
      {
        "perceived_negatively": true,
        "word": "poco afectuoso"
      },
      {
        "perceived_negatively": true,
        "word": "desapasionado"
      },
      {
        "perceived_negatively": true,
        "word": "una persona sin emociones"
      }
    ],
    "big5_agreeableness_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "sentimental"
      },
      {
        "perceived_negatively": false,
        "word": "cariñoso"
      },
      {
        "perceived_negatively": false,
        "word": "sensible"
      },
      {
        "perceived_negatively": false,
        "word": "tierno"
      },
      {
        "perceived_negatively": false,
        "word": "apasionado"
      },
      {
        "perceived_negatively": false,
        "word": "romántico"
      }
    ],
    "big5_conscientiousness_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "informal"
      },
      {
        "perceived_negatively": false,
        "word": "de bajo perfil"
      }
    ],
    "big5_agreeableness_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "sobrio"
      },
      {
        "perceived_negatively": false,
        "word": "modesto"
      }
    ],
    "big5_conscientiousness_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "confiable"
      },
      {
        "perceived_negatively": false,
        "word": "responsable"
      },
      {
        "perceived_negatively": false,
        "word": "seguro"
      },
      {
        "perceived_negatively": false,
        "word": "educado"
      },
      {
        "perceived_negatively": false,
        "word": "considerado"
      }
    ],
    "big5_agreeableness_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "obstinado"
      },
      {
        "perceived_negatively": true,
        "word": "abrupto"
      },
      {
        "perceived_negatively": true,
        "word": "crudo"
      },
      {
        "perceived_negatively": true,
        "word": "combativo"
      },
      {
        "perceived_negatively": true,
        "word": "duro"
      },
      {
        "perceived_negatively": false,
        "word": "astuto"
      },
      {
        "perceived_negatively": true,
        "word": "manipulador"
      },
      {
        "perceived_negatively": true,
        "word": "hosco"
      },
      {
        "perceived_negatively": true,
        "word": "taimado"
      }
    ],
    "big5_neuroticism_plus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "irritable"
      },
      {
        "perceived_negatively": false,
        "word": "fastidioso"
      },
      {
        "perceived_negatively": false,
        "word": "aprensivo"
      }
    ],
    "big5_openness_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": true,
        "word": "simple"
      },
      {
        "perceived_negatively": true,
        "word": "dependiente"
      }
    ],
    "big5_neuroticism_minus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "imperturbable"
      },
      {
        "perceived_negatively": true,
        "word": "insensible"
      }
    ],
    "big5_agreeableness_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "desconsiderado"
      },
      {
        "perceived_negatively": true,
        "word": "descortés"
      },
      {
        "perceived_negatively": true,
        "word": "desconfiado"
      },
      {
        "perceived_negatively": true,
        "word": "poco cooperativo"
      },
      {
        "perceived_negatively": true,
        "word": "irreflexivo"
      }
    ],
    "big5_extraversion_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "activo"
      },
      {
        "perceived_negatively": false,
        "word": "competitivo"
      },
      {
        "perceived_negatively": false,
        "word": "persistente"
      },
      {
        "perceived_negatively": false,
        "word": "ambicioso"
      },
      {
        "perceived_negatively": false,
        "word": "decidido"
      }
    ],
    "big5_agreeableness_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "estricto"
      },
      {
        "perceived_negatively": false,
        "word": "rígido"
      },
      {
        "perceived_negatively": true,
        "word": "duro"
      }
    ],
    "big5_neuroticism_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "paciente"
      },
      {
        "perceived_negatively": false,
        "word": "relajado"
      },
      {
        "perceived_negatively": false,
        "word": "poco exigente"
      },
      {
        "perceived_negatively": false,
        "word": "realista"
      },
      {
        "perceived_negatively": false,
        "word": "optimista"
      },
      {
        "perceived_negatively": false,
        "word": "modesto"
      },
      {
        "perceived_negatively": false,
        "word": "poco crítico"
      },
      {
        "perceived_negatively": false,
        "word": "poco pretencioso"
      }
    ],
    "big5_openness_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "predecible"
      },
      {
        "perceived_negatively": true,
        "word": "poco imaginativo"
      },
      {
        "perceived_negatively": false,
        "word": "sombrío"
      },
      {
        "perceived_negatively": true,
        "word": "apático"
      },
      {
        "perceived_negatively": true,
        "word": "poco aventurero"
      }
    ],
    "big5_extraversion_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "terco"
      },
      {
        "perceived_negatively": true,
        "word": "vigoroso"
      },
      {
        "perceived_negatively": true,
        "word": "dominador"
      },
      {
        "perceived_negatively": true,
        "word": "presumido"
      },
      {
        "perceived_negatively": true,
        "word": "mandón"
      },
      {
        "perceived_negatively": false,
        "word": "dominante"
      },
      {
        "perceived_negatively": false,
        "word": "astuto"
      }
    ],
    "big5_neuroticism_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "temperamental"
      },
      {
        "perceived_negatively": true,
        "word": "irritable"
      },
      {
        "perceived_negatively": true,
        "word": "peleador"
      },
      {
        "perceived_negatively": true,
        "word": "impaciente"
      },
      {
        "perceived_negatively": true,
        "word": "gruñón"
      },
      {
        "perceived_negatively": true,
        "word": "malhumorado"
      },
      {
        "perceived_negatively": true,
        "word": "irritable"
      }
    ],
    "big5_neuroticism_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "excitable"
      },
      {
        "perceived_negatively": true,
        "word": "verborrágico"
      },
      {
        "perceived_negatively": false,
        "word": "coqueto"
      },
      {
        "perceived_negatively": true,
        "word": "explosivo"
      },
      {
        "perceived_negatively": false,
        "word": "extravagante"
      },
      {
        "perceived_negatively": true,
        "word": "volátil"
      }
    ],
    "big5_agreeableness_minus_big5_openness_minus": [
      {
        "perceived_negatively": true,
        "word": "tosco"
      },
      {
        "perceived_negatively": true,
        "word": "una persona sin tacto"
      },
      {
        "perceived_negatively": true,
        "word": "brusco"
      },
      {
        "perceived_negatively": true,
        "word": "cerrado"
      },
      {
        "perceived_negatively": true,
        "word": "áspero"
      },
      {
        "perceived_negatively": true,
        "word": "implacable"
      },
      {
        "perceived_negatively": true,
        "word": "poco caritativo"
      },
      {
        "perceived_negatively": true,
        "word": "vengativo"
      }
    ],
    "big5_conscientiousness_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "poco pretencioso"
      },
      {
        "perceived_negatively": false,
        "word": "modesto"
      }
    ],
    "big5_agreeableness_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "amistoso"
      },
      {
        "perceived_negatively": false,
        "word": "una persona con tacto"
      },
      {
        "perceived_negatively": false,
        "word": "diplomático"
      },
      {
        "perceived_negatively": false,
        "word": "profundo"
      },
      {
        "perceived_negatively": false,
        "word": "idealista"
      }
    ],
    "big5_agreeableness_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": true,
        "word": "crítico"
      },
      {
        "perceived_negatively": true,
        "word": "egoísta"
      },
      {
        "perceived_negatively": true,
        "word": "de mal genio"
      },
      {
        "perceived_negatively": true,
        "word": "antagonista"
      },
      {
        "perceived_negatively": true,
        "word": "gruñón"
      },
      {
        "perceived_negatively": true,
        "word": "amargado"
      },
      {
        "perceived_negatively": true,
        "word": "desagradable"
      },
      {
        "perceived_negatively": true,
        "word": "exigente"
      }
    ],
    "big5_openness_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "imperturbable"
      },
      {
        "perceived_negatively": true,
        "word": "insensible"
      }
    ],
    "big5_conscientiousness_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "sofisticado"
      },
      {
        "perceived_negatively": false,
        "word": "perfeccionista"
      },
      {
        "perceived_negatively": false,
        "word": "industrioso"
      },
      {
        "perceived_negatively": false,
        "word": "digno"
      },
      {
        "perceived_negatively": false,
        "word": "refinado"
      },
      {
        "perceived_negatively": false,
        "word": "culto"
      },
      {
        "perceived_negatively": false,
        "word": "previsor"
      }
    ],
    "big5_agreeableness_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "perspicaz"
      },
      {
        "perceived_negatively": false,
        "word": "excéntrico"
      },
      {
        "perceived_negatively": false,
        "word": "individualista"
      }
    ],
    "big5_neuroticism_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "excitable"
      },
      {
        "perceived_negatively": false,
        "word": "apasionado"
      },
      {
        "perceived_negatively": false,
        "word": "sensual"
      }
    ],
    "big5_neuroticism_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "sentido"
      },
      {
        "perceived_negatively": false,
        "word": "versátil"
      },
      {
        "perceived_negatively": false,
        "word": "creativo"
      },
      {
        "perceived_negatively": false,
        "word": "intelectual"
      },
      {
        "perceived_negatively": false,
        "word": "perspicaz"
      }
    ],
    "big5_openness_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "convencional"
      },
      {
        "perceived_negatively": false,
        "word": "tradicional"
      }
    ],
    "big5_extraversion_plus_big5_openness_minus": [
      {
        "perceived_negatively": true,
        "word": "verborrágico"
      },
      {
        "perceived_negatively": true,
        "word": "inescrupuloso"
      },
      {
        "perceived_negatively": true,
        "word": "pomposo"
      }
    ],
    "big5_extraversion_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "una persona guiada por su propia consciencia y valores"
      },
      {
        "perceived_negatively": false,
        "word": "introspectivo"
      },
      {
        "perceived_negatively": false,
        "word": "pensativo"
      },
      {
        "perceived_negatively": false,
        "word": "contemplativo"
      },
      {
        "perceived_negatively": false,
        "word": "introspectivo"
      }
    ],
    "big5_openness_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "cortoplacista"
      },
      {
        "perceived_negatively": false,
        "word": "temerario"
      },
      {
        "perceived_negatively": true,
        "word": "ilógico"
      },
      {
        "perceived_negatively": true,
        "word": "inmaduro"
      },
      {
        "perceived_negatively": true,
        "word": "azaroso"
      },
      {
        "perceived_negatively": false,
        "word": "laxo"
      },
      {
        "perceived_negatively": true,
        "word": "irrespetuoso"
      }
    ],
    "big5_extraversion_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "tranquilo"
      },
      {
        "perceived_negatively": false,
        "word": "sosegado"
      },
      {
        "perceived_negatively": false,
        "word": "plácido"
      },
      {
        "perceived_negatively": false,
        "word": "imparcial"
      },
      {
        "perceived_negatively": false,
        "word": "modesto"
      },
      {
        "perceived_negatively": false,
        "word": "condescendiente"
      }
    ],
    "big5_conscientiousness_plus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "tradicional"
      },
      {
        "perceived_negatively": false,
        "word": "convencional"
      }
    ],
    "big5_openness_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "creativo"
      },
      {
        "perceived_negatively": false,
        "word": "intelectual"
      },
      {
        "perceived_negatively": false,
        "word": "perspicaz"
      },
      {
        "perceived_negatively": false,
        "word": "versátil"
      },
      {
        "perceived_negatively": false,
        "word": "inventivo"
      }
    ],
    "big5_agreeableness_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "conmovible"
      },
      {
        "perceived_negatively": false,
        "word": "agradable"
      },
      {
        "perceived_negatively": false,
        "word": "servicial"
      },
      {
        "perceived_negatively": false,
        "word": "humilde"
      },
      {
        "perceived_negatively": true,
        "word": "indulgente"
      }
    ],
    "big5_extraversion_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "indirecto"
      },
      {
        "perceived_negatively": true,
        "word": "débil"
      },
      {
        "perceived_negatively": true,
        "word": "perezoso"
      },
      {
        "perceived_negatively": true,
        "word": "poco persistente"
      },
      {
        "perceived_negatively": true,
        "word": "vago"
      }
    ],
    "big5_openness_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "analítico"
      },
      {
        "perceived_negatively": false,
        "word": "perceptivo"
      },
      {
        "perceived_negatively": false,
        "word": "informativo"
      },
      {
        "perceived_negatively": false,
        "word": "grandilocuente"
      },
      {
        "perceived_negatively": false,
        "word": "digno"
      },
      {
        "perceived_negatively": false,
        "word": "culto"
      }
    ],
    "big5_openness_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "verborrágico"
      },
      {
        "perceived_negatively": true,
        "word": "inescrupuloso"
      },
      {
        "perceived_negatively": true,
        "word": "pomposo"
      }
    ],
    "big5_conscientiousness_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "arrebatado"
      },
      {
        "perceived_negatively": true,
        "word": "poco cooperativo"
      },
      {
        "perceived_negatively": true,
        "word": "poco fiable"
      },
      {
        "perceived_negatively": true,
        "word": "desconfiado"
      },
      {
        "perceived_negatively": true,
        "word": "irreflexivo"
      }
    ],
    "big5_agreeableness_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "generoso"
      },
      {
        "perceived_negatively": false,
        "word": "agradable"
      },
      {
        "perceived_negatively": false,
        "word": "tolerante"
      },
      {
        "perceived_negatively": false,
        "word": "pacífico"
      },
      {
        "perceived_negatively": false,
        "word": "flexible"
      },
      {
        "perceived_negatively": false,
        "word": "fácil de tratar"
      },
      {
        "perceived_negatively": false,
        "word": "justo"
      },
      {
        "perceived_negatively": false,
        "word": "caritativo"
      },
      {
        "perceived_negatively": false,
        "word": "confiable"
      }
    ],
    "big5_openness_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": false,
        "word": "perspicaz"
      },
      {
        "perceived_negatively": false,
        "word": "excéntrico"
      },
      {
        "perceived_negatively": false,
        "word": "individualista"
      }
    ],
    "big5_conscientiousness_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "ambicioso"
      },
      {
        "perceived_negatively": false,
        "word": "alerta"
      },
      {
        "perceived_negatively": false,
        "word": "firme"
      },
      {
        "perceived_negatively": false,
        "word": "decidido"
      },
      {
        "perceived_negatively": false,
        "word": "competitivo"
      }
    ],
    "big5_openness_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "idealista"
      },
      {
        "perceived_negatively": false,
        "word": "diplomático"
      },
      {
        "perceived_negatively": false,
        "word": "profundo"
      },
      {
        "perceived_negatively": false,
        "word": "una persona con tacto"
      },
      {
        "perceived_negatively": false,
        "word": "amistoso"
      }
    ],
    "big5_conscientiousness_minus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "temerario"
      },
      {
        "perceived_negatively": true,
        "word": "ilógico"
      },
      {
        "perceived_negatively": true,
        "word": "inmaduro"
      },
      {
        "perceived_negatively": true,
        "word": "azaroso"
      },
      {
        "perceived_negatively": false,
        "word": "laxo"
      },
      {
        "perceived_negatively": true,
        "word": "indisciplinado"
      }
    ],
    "big5_conscientiousness_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "detallista"
      },
      {
        "perceived_negatively": true,
        "word": "excitable"
      }
    ],
    "big5_neuroticism_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "inconsciente de si mismo"
      },
      {
        "perceived_negatively": false,
        "word": "incansable"
      },
      {
        "perceived_negatively": false,
        "word": "infatigable"
      }
    ],
    "big5_openness_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "ordinario"
      },
      {
        "perceived_negatively": true,
        "word": "sin tacto"
      },
      {
        "perceived_negatively": true,
        "word": "brusco"
      },
      {
        "perceived_negatively": true,
        "word": "cerrado"
      },
      {
        "perceived_negatively": true,
        "word": "duro"
      }
    ],
    "big5_neuroticism_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "emotivo"
      },
      {
        "perceived_negatively": true,
        "word": "crédulo"
      },
      {
        "perceived_negatively": false,
        "word": "cariñoso"
      },
      {
        "perceived_negatively": false,
        "word": "sensible"
      },
      {
        "perceived_negatively": false,
        "word": "blando"
      }
    ],
    "big5_extraversion_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "pacífico"
      },
      {
        "perceived_negatively": false,
        "word": "humilde"
      },
      {
        "perceived_negatively": false,
        "word": "sumiso"
      },
      {
        "perceived_negatively": false,
        "word": "tímido"
      },
      {
        "perceived_negatively": false,
        "word": "obediente"
      },
      {
        "perceived_negatively": false,
        "word": "ingenuo"
      }
    ],
    "big5_agreeableness_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "efervescente"
      },
      {
        "perceived_negatively": false,
        "word": "alegre"
      },
      {
        "perceived_negatively": false,
        "word": "amistoso"
      },
      {
        "perceived_negatively": false,
        "word": "alegre"
      },
      {
        "perceived_negatively": false,
        "word": "jovial"
      },
      {
        "perceived_negatively": false,
        "word": "jocoso"
      }
    ],
    "big5_openness_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "mundano"
      },
      {
        "perceived_negatively": false,
        "word": "exagerado"
      },
      {
        "perceived_negatively": false,
        "word": "elocuente"
      },
      {
        "perceived_negatively": false,
        "word": "inquisitivo"
      },
      {
        "perceived_negatively": false,
        "word": "intenso"
      }
    ],
    "big5_extraversion_minus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "sombrío"
      },
      {
        "perceived_negatively": true,
        "word": "manso"
      },
      {
        "perceived_negatively": true,
        "word": "poco aventurero"
      },
      {
        "perceived_negatively": false,
        "word": "pasivo"
      },
      {
        "perceived_negatively": true,
        "word": "apático"
      },
      {
        "perceived_negatively": false,
        "word": "dócil"
      }
    ],
    "big5_extraversion_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "moderado"
      },
      {
        "perceived_negatively": false,
        "word": "serio"
      },
      {
        "perceived_negatively": false,
        "word": "discreto"
      },
      {
        "perceived_negatively": false,
        "word": "cauteloso"
      },
      {
        "perceived_negatively": false,
        "word": "principista"
      }
    ],
    "big5_neuroticism_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "modesto"
      },
      {
        "perceived_negatively": true,
        "word": "poco excitable"
      },
      {
        "perceived_negatively": false,
        "word": "plácido"
      },
      {
        "perceived_negatively": false,
        "word": "tranquilo"
      }
    ],
    "big5_extraversion_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "explosivo"
      },
      {
        "perceived_negatively": true,
        "word": "verborrágico"
      },
      {
        "perceived_negatively": false,
        "word": "extravagante"
      },
      {
        "perceived_negatively": true,
        "word": "volátil"
      },
      {
        "perceived_negatively": false,
        "word": "coqueto"
      }
    ],
    "big5_extraversion_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "expresivo"
      },
      {
        "perceived_negatively": false,
        "word": "cándido"
      },
      {
        "perceived_negatively": false,
        "word": "dramático"
      },
      {
        "perceived_negatively": false,
        "word": "espontáneo"
      },
      {
        "perceived_negatively": false,
        "word": "ingenioso"
      },
      {
        "perceived_negatively": false,
        "word": "oportunista"
      },
      {
        "perceived_negatively": false,
        "word": "independiente"
      }
    ],
    "big5_conscientiousness_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "poco convencional"
      },
      {
        "perceived_negatively": false,
        "word": "peculiar"
      }
    ],
    "big5_extraversion_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": false,
        "word": "escéptico"
      },
      {
        "perceived_negatively": false,
        "word": "cauto con los demás"
      },
      {
        "perceived_negatively": true,
        "word": "solitario"
      },
      {
        "perceived_negatively": true,
        "word": "poco comunicativo"
      },
      {
        "perceived_negatively": true,
        "word": "antisocial"
      },
      {
        "perceived_negatively": true,
        "word": "sombrío"
      },
      {
        "perceived_negatively": true,
        "word": "desinteresado"
      },
      {
        "perceived_negatively": false,
        "word": "apartado"
      }
    ],
    "big5_conscientiousness_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": true,
        "word": "atolondrado"
      },
      {
        "perceived_negatively": true,
        "word": "inconsistente"
      },
      {
        "perceived_negatively": true,
        "word": "errático"
      },
      {
        "perceived_negatively": true,
        "word": "olvidadizo"
      },
      {
        "perceived_negatively": true,
        "word": "impulsivo"
      },
      {
        "perceived_negatively": true,
        "word": "frívolo"
      }
    ],
    "big5_conscientiousness_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "minucioso"
      },
      {
        "perceived_negatively": false,
        "word": "estable"
      },
      {
        "perceived_negatively": false,
        "word": "consistente"
      },
      {
        "perceived_negatively": false,
        "word": "disciplinado"
      },
      {
        "perceived_negatively": false,
        "word": "lógico"
      },
      {
        "perceived_negatively": false,
        "word": "decidido"
      },
      {
        "perceived_negatively": false,
        "word": "controlado"
      },
      {
        "perceived_negatively": false,
        "word": "conciso"
      }
    ],
    "big5_openness_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "irritable"
      },
      {
        "perceived_negatively": false,
        "word": "fastidioso"
      },
      {
        "perceived_negatively": false,
        "word": "aprensivo"
      }
    ],
    "big5_agreeableness_plus_big5_openness_minus": [
      {
        "perceived_negatively": true,
        "word": "dependiente"
      },
      {
        "perceived_negatively": true,
        "word": "simple"
      }
    ],
    "big5_conscientiousness_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "cauto"
      },
      {
        "perceived_negatively": false,
        "word": "seguro"
      },
      {
        "perceived_negatively": false,
        "word": "exacto"
      },
      {
        "perceived_negatively": false,
        "word": "formal"
      },
      {
        "perceived_negatively": false,
        "word": "ahorrativo"
      },
      {
        "perceived_negatively": false,
        "word": "principista"
      }
    ],
    "big5_agreeableness_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "servicial"
      },
      {
        "perceived_negatively": false,
        "word": "cooperativo"
      },
      {
        "perceived_negatively": false,
        "word": "considerado"
      },
      {
        "perceived_negatively": false,
        "word": "respetuoso"
      },
      {
        "perceived_negatively": false,
        "word": "cortés"
      },
      {
        "perceived_negatively": false,
        "word": "sensato"
      },
      {
        "perceived_negatively": false,
        "word": "atento"
      },
      {
        "perceived_negatively": false,
        "word": "considerado"
      },
      {
        "perceived_negatively": false,
        "word": "leal"
      },
      {
        "perceived_negatively": false,
        "word": "moral"
      }
    ],
    "big5_neuroticism_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "racional"
      },
      {
        "perceived_negatively": false,
        "word": "objetivo"
      },
      {
        "perceived_negatively": false,
        "word": "estable"
      },
      {
        "perceived_negatively": false,
        "word": "lógico"
      },
      {
        "perceived_negatively": false,
        "word": "decidido"
      },
      {
        "perceived_negatively": false,
        "word": "preparado"
      },
      {
        "perceived_negatively": false,
        "word": "conciso"
      },
      {
        "perceived_negatively": false,
        "word": "exhaustivo"
      },
      {
        "perceived_negatively": false,
        "word": "económico"
      },
      {
        "perceived_negatively": false,
        "word": "disciplinado"
      }
    ],
    "big5_extraversion_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "confiado"
      },
      {
        "perceived_negatively": false,
        "word": "audaz"
      },
      {
        "perceived_negatively": false,
        "word": "seguro"
      },
      {
        "perceived_negatively": false,
        "word": "desinhibido"
      },
      {
        "perceived_negatively": false,
        "word": "valiente"
      },
      {
        "perceived_negatively": false,
        "word": "valiente"
      },
      {
        "perceived_negatively": false,
        "word": "una persona satisfecha de si misma"
      },
      {
        "perceived_negatively": false,
        "word": "vigoroso"
      },
      {
        "perceived_negatively": false,
        "word": "fuerte"
      }
    ],
    "big5_agreeableness_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": true,
        "word": "cínico"
      },
      {
        "perceived_negatively": true,
        "word": "cauto con los demás"
      },
      {
        "perceived_negatively": true,
        "word": "solitario"
      },
      {
        "perceived_negatively": true,
        "word": "desapegado"
      },
      {
        "perceived_negatively": true,
        "word": "impersonal"
      },
      {
        "perceived_negatively": true,
        "word": "sombrío"
      }
    ],
    "big5_neuroticism_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "informal"
      },
      {
        "perceived_negatively": false,
        "word": "de perfil bajo"
      }
    ],
    "big5_neuroticism_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "poco emocional"
      },
      {
        "perceived_negatively": true,
        "word": "insensible"
      },
      {
        "perceived_negatively": true,
        "word": "poco cariñoso"
      },
      {
        "perceived_negatively": true,
        "word": "desapasionado"
      }
    ],
    "big5_extraversion_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "desconfiado"
      },
      {
        "perceived_negatively": false,
        "word": "pesimista"
      },
      {
        "perceived_negatively": false,
        "word": "reservado"
      },
      {
        "perceived_negatively": true,
        "word": "cobarde"
      },
      {
        "perceived_negatively": false,
        "word": "callado"
      }
    ],
    "big5_openness_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "introspectivo"
      },
      {
        "perceived_negatively": false,
        "word": "meditativo"
      },
      {
        "perceived_negatively": false,
        "word": "contemplativo"
      },
      {
        "perceived_negatively": false,
        "word": "introspectivo"
      },
      {
        "perceived_negatively": false,
        "word": "pensativo"
      }
    ],
    "big5_extraversion_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "bullicioso"
      },
      {
        "perceived_negatively": false,
        "word": "travieso"
      },
      {
        "perceived_negatively": false,
        "word": "exhibicionista"
      },
      {
        "perceived_negatively": false,
        "word": "gregario"
      },
      {
        "perceived_negatively": false,
        "word": "demostrativo"
      }
    ],
    "big5_conscientiousness_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "revoltoso"
      },
      {
        "perceived_negatively": false,
        "word": "bullicioso"
      },
      {
        "perceived_negatively": true,
        "word": "temerario"
      },
      {
        "perceived_negatively": true,
        "word": "tumultuoso"
      },
      {
        "perceived_negatively": false,
        "word": "demostrativo"
      }
    ],
    "big5_openness_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "apasionado"
      },
      {
        "perceived_negatively": false,
        "word": "excitable"
      },
      {
        "perceived_negatively": false,
        "word": "sensual"
      }
    ],
    "big5_extraversion_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "social"
      },
      {
        "perceived_negatively": false,
        "word": "enérgico"
      },
      {
        "perceived_negatively": false,
        "word": "entusiasta"
      },
      {
        "perceived_negatively": false,
        "word": "comunicativo"
      },
      {
        "perceived_negatively": false,
        "word": "vibrante"
      },
      {
        "perceived_negatively": false,
        "word": "espirituoso"
      },
      {
        "perceived_negatively": false,
        "word": "magnético"
      },
      {
        "perceived_negatively": false,
        "word": "entusiasta"
      }
    ],
    "big5_neuroticism_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "compulsivo"
      },
      {
        "perceived_negatively": true,
        "word": "inquisitivo"
      },
      {
        "perceived_negatively": true,
        "word": "desenfrenado"
      },
      {
        "perceived_negatively": true,
        "word": "olvidadizo"
      },
      {
        "perceived_negatively": true,
        "word": "impulsivo"
      }
    ],
    "big5_openness_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "poco convencional"
      },
      {
        "perceived_negatively": false,
        "word": "peculiar"
      }
    ],
    "big5_conscientiousness_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": true,
        "word": "indeciso"
      },
      {
        "perceived_negatively": true,
        "word": "una persona sin propósito"
      },
      {
        "perceived_negatively": false,
        "word": "una persona sin carácter"
      },
      {
        "perceived_negatively": false,
        "word": "una persona sin compromiso"
      },
      {
        "perceived_negatively": true,
        "word": "poco ambicioso"
      }
    ],
    "big5_neuroticism_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "detallista"
      },
      {
        "perceived_negatively": true,
        "word": "excitable"
      }
    ]
  },
  "values": {
    "value_self_transcendence": [
      {
        "Term": "Ayudar a los demás",
        "LowDescription": "Cree que las personas pueden encargarse de sus propios asuntos sin interferencia",
        "HighDescription": "Cree que es importante cuidar de las personas que lo rodean"
      },
      {
        "Term": "La justicia",
        "LowDescription": "Cree que son las personas crean sus oportunidades",
        "HighDescription": "Cree en la justicia social y la igualdad para todos"
      },
      {
        "Term": "La justicia social",
        "LowDescription": "Cree que son las personas crean sus oportunidades",
        "HighDescription": "Cree en la justicia social y la igualdad para todos"
      },
      {
        "Term": "La igualdad",
        "LowDescription": "Cree que son las personas crean sus oportunidades",
        "HighDescription": "Cree en la justicia social y la igualdad para todos"
      },
      {
        "Term": "El servicio comunitario",
        "LowDescription": "Cree que las personas pueden encargarse de sus propios asuntos sin interferencia",
        "HighDescription": "Cree que es importante cuidar de las personas que lo rodean"
      }
    ],
    "value_hedonism": [
      {
        "Term": "Disfrutar de la vida",
        "LowDescription": "Prefiere actividades con un propósito más grande que el sólo deleite personal",
        "HighDescription": "Tiene gran motivación por disfrutar la vida en su plenitud"
      }
    ],
    "value_conservation": [
      {
        "Term": "Las tradiciones",
        "LowDescription": "Le importa más seguir su propio camino que seguir el camino de otros",
        "HighDescription": "Tiene mucho respeto por los grupos a los que pertenece y sigue su guía"
      },
      {
        "Term": "La armonía",
        "LowDescription": "Decide qué es lo correcto basado en sus creencias, no en lo que la gente piensa",
        "HighDescription": "Cree que las reglas existen por una razón y nunca intenta trasgredirlas"
      },
      {
        "Term": "La humildad",
        "LowDescription": "Decide qué es lo correcto basado en sus creencias, no en lo que la gente piensa",
        "HighDescription": "Ve valor en deferir a otros"
      },
      {
        "Term": "Las normas sociales",
        "LowDescription": "Decide qué es lo correcto basado en sus creencias, no en lo que la gente piensa",
        "HighDescription": "Cree que las reglas existen por una razón y nunca intenta trasgredirlas"
      },
      {
        "Term": "La seguridad",
        "LowDescription": "Prefiere la seguridad a costa de dejar a un lado sus metas",
        "HighDescription": "Cree que es importante salvaguardar la seguridad"
      },
      {
        "Term": "La seguridad",
        "LowDescription": "Prefiere estar seguro a costa de dejar a un lado sus metas",
        "HighDescription": "Cree que es importante salvaguardar la seguridad"
      }
    ],
    "value_self_enhancement": [
      {
        "Term": "Alcanzar el éxito",
        "LowDescription": "Toma decisiones sin considerar cómo muestran sus talentos",
        "HighDescription": "Busca oportunidades para autosuperase y para demostrar que es una persona capaz"
      },
      {
        "Term": "Mejorar su estatus social",
        "LowDescription": "Está conforme con su estatus social y no siente necesidad de mejorarlo",
        "HighDescription": "Se esfuerza considerablemente para mejorar su estatus e imagen pública"
      },
      {
        "Term": "La ambición",
        "LowDescription": "Está conforme con su estatus social y no siente necesidad de mejorarlo",
        "HighDescription": "Siente que es importante avanzar para alcanzar metas"
      },
      {
        "Term": "Los grandes logros",
        "LowDescription": "Toma decisiones sin considerar cómo muestran sus talentos",
        "HighDescription": "Busca oportunidades para autosuperase y para demostrar que es una persona capaz"
      }
    ],
    "value_openness_to_change": [
      {
        "Term": "Ser independiente",
        "LowDescription": "Recibe de buena manera que otros dirijan sus actividades",
        "HighDescription": "Le gusta establecer sus propias metas para decidir cómo alcanzarlas mejor"
      },
      {
        "Term": "La emoción",
        "LowDescription": "Se apega a las cosas que conoce antes que arriesgarse a probar algo nuevo y riesgoso",
        "HighDescription": "Está ansioso por buscar experiencias nuevas y emocionantes"
      },
      {
        "Term": "La creatividad",
        "LowDescription": "Se apega a las cosas que conoce antes que arriesgarse a probar algo nuevo y riesgoso",
        "HighDescription": "Está ansioso por buscar experiencias nuevas y emocionantes"
      },
      {
        "Term": "La curiosidad",
        "LowDescription": "Se apega a las cosas que conoce antes que arriesgarse a probar algo nuevo y riesgoso",
        "HighDescription": "Está ansioso por buscar experiencias nuevas y emocionantes"
      },
      {
        "Term": "La autonomía",
        "LowDescription": "Recibe de buena manera que otros dirijan sus actividades",
        "HighDescription": "Le gusta establecer sus propias metas para decidir cómo alcanzarlas mejor"
      },
      {
        "Term": "La libertad",
        "LowDescription": "Recibe de buena manera que otros dirijan sus actividades",
        "HighDescription": "Le gusta establecer sus propias metas para decidir cómo alcanzarlas mejor"
      }
    ]
  }
}

},{}],7:[function(require,module,exports){
module.exports={
  "big5": {
    "big5_openness": {
      "HighDescription": "知的好奇心があり、落ち着きがあり、美に敏感で、新しいことを試そうとするタイプです。",
      "LowDescription": "平穏を好み、率直で、複雑なものや曖昧なもの、取るに足らないものに対して関心を持たないタイプです。"
    },
    "big5_conscientiousness": {
      "HighDescription": "自己統制をし、誠実、あるいは外部の期待や評価に応えようとするタイプです。",
      "LowDescription": "計画に従うより、自発的に物事を行うことを好むタイプです。"
    },
    "big5_extraversion": {
      "HighDescription": "よりエネルギッシュで、社交的なタイプです。グループ内で目立つこと、話しをすること、自分を主張することが好きです。",
      "LowDescription": "刺激をあまり求めず、人とのかかわりを避けるタイプです。但しそれは、臆病、非友好的、反社会的であるということではありません。"
    },
    "big5_agreeableness": {
      "HighDescription": "他人とうまくやっていくことを重要視するタイプです。人間の本性に関して楽観的な見方をしています。",
      "LowDescription": "他人より自分の興味を優先するタイプです。 他人の言葉の裏を考えてしまう傾向があります。"
    },
    "big5_neuroticism": {
      "HighDescription": "否定的な感情を抱いたり、取り乱したりするタイプです。それは、苦労が多いことを意味しているのかも知れません。",
      "LowDescription": "穏やかで、あまり怒らないタイプです。 但し、それは、自信に満ちていたり幸せな人だというわけではありません。"
    }
  },
  "facets": {
    "facet_intellect": {
      "LowTerm": "現実的な",
      "HighDescription": "新しいアイディアに興味をそそられ、進んで受け入れ、探求することを好みます",
      "HighTerm": "哲学的な",
      "LowDescription": "抽象的なアイディアや新しい発想にはあまり目を向けず、現状の世の中にうまく対応していくことを好みます",
      "Big5": "big5_openness"
    },
    "facet_gregariousness": {
      "LowTerm": "自主性の高い",
      "HighDescription": "他の人達と一緒にいることを楽しいと感じます",
      "HighTerm": "社交的な",
      "LowDescription": "自分の時間を大切にしたいという強い願望があります",
      "Big5": "big5_extraversion"
    },
    "facet_achievement_striving": {
      "LowTerm": "現状に満足している",
      "HighDescription": "自分自身に高い目標を持ち、それを達成するために熱心に取り組みます",
      "HighTerm": "やる気がある",
      "LowDescription": "自身の達成レベルに満足していて、大胆な目標を設定する必要を感じていません",
      "Big5": "big5_conscientiousness"
    },
    "facet_depression": {
      "LowTerm": "現状に満足している",
      "HighDescription": "不満に思うことについて常に考えてしまいます",
      "HighTerm": "沈みがちな",
      "LowDescription": "概してあなた自身に満足しています",
      "Big5": "big5_neuroticism"
    },
    "facet_sympathy": {
      "LowTerm": "冷淡な",
      "HighDescription": "他人がどう感じるかを意識し、同情するタイプです",
      "HighTerm": "感情移入する",
      "LowDescription": "他人に頼るよりも、自分自身をもっと頼りにすべきだと考えるタイプです",
      "Big5": "big5_agreeableness"
    },
    "facet_imagination": {
      "LowTerm": "堅実な",
      "HighDescription": "想像力豊かです",
      "HighTerm": "創意に富んでいる",
      "LowDescription": "思い付きよりも事実を選びます",
      "Big5": "big5_openness"
    },
    "facet_self_discipline": {
      "LowTerm": "集中が途切れる",
      "HighDescription": "困難な仕事に取り組み続けることができます",
      "HighTerm": "粘り強い",
      "LowDescription": "長期間にわたって困難な仕事に取り組みつづけることがなかなかできません",
      "Big5": "big5_conscientiousness"
    },
    "facet_assertiveness": {
      "LowTerm": "慎み深い",
      "HighDescription": "遠慮なく発言し、その場をリードする傾向があります。また、集団を統率できます",
      "HighTerm": "自己主張が強い",
      "LowDescription": "特にグループにいる状況では話すことよりも聞くことを好みます",
      "Big5": "big5_extraversion"
    },
    "facet_cheerfulness": {
      "LowTerm": "厳粛な",
      "HighDescription": "喜びにあふれる人で、その喜びを周囲と分かち合います",
      "HighTerm": "快活な",
      "LowDescription": "普段まじめで、あまり冗談を言いません",
      "Big5": "big5_extraversion"
    },
    "facet_self_efficacy": {
      "LowTerm": "自分に自信が持てない",
      "HighDescription": "始めたことを成し遂げる能力があると思っています",
      "HighTerm": "自分に自信がある",
      "LowDescription": "自分の目標達成能力をしばしば疑います",
      "Big5": "big5_conscientiousness"
    },
    "facet_morality": {
      "LowTerm": "対面を気にしない",
      "HighDescription": "他人を利用して成功するのは間違っていると考えます",
      "HighTerm": "名誉を尊重する",
      "LowDescription": "自分が望むものを得るためにあらゆる手段を講じることを心地よく感じます",
      "Big5": "big5_agreeableness"
    },
    "facet_liberalism": {
      "LowTerm": "権威を尊重する",
      "HighDescription": "権威や伝統を守るよりも、より良い方向へ変化させる方が良いと考えます",
      "HighTerm": "権威に挑む",
      "LowDescription": "安定感を大切にし、伝統に従うことを好みます",
      "Big5": "big5_openness"
    },
    "facet_altruism": {
      "LowTerm": "自分本位な",
      "HighDescription": "人を支援することに充実感を覚え、そのように尽力するでしょう",
      "HighTerm": "利他的な",
      "LowDescription": "人のために時間を費やすよりも、自立的に自分のことを自分で行う傾向があります",
      "Big5": "big5_agreeableness"
    },
    "facet_self_consciousness": {
      "LowTerm": "確信を持って行動する",
      "HighDescription": "人からどう思われているかについて神経質になっています",
      "HighTerm": "人目を気にする",
      "LowDescription": "困難を感じたりせず、大抵の場合自信に満ちています",
      "Big5": "big5_neuroticism"
    },
    "facet_vulnerability": {
      "LowTerm": "圧力を受けても冷静な",
      "HighDescription": "ストレスの多い状況下で精神的に押しつぶされ易い傾向があります",
      "HighTerm": "ストレスの影響を受けやすい",
      "LowDescription": "冷静で、予期しない出来事にも効果的に対処します",
      "Big5": "big5_neuroticism"
    },
    "facet_trust": {
      "LowTerm": "用心深い",
      "HighDescription": "何においても人を信じ、容易に信頼します",
      "HighTerm": "人を信じる",
      "LowDescription": "他人の意図を警戒し、容易に信用しません",
      "Big5": "big5_agreeableness"
    },
    "facet_orderliness": {
      "LowTerm": "自由奔放な",
      "HighDescription": "規則正しい生活を強く望んでいます",
      "HighTerm": "几帳面な",
      "LowDescription": "毎日の生活の中で組織のためには多くの時間を割きません",
      "Big5": "big5_conscientiousness"
    },
    "facet_anxiety": {
      "LowTerm": "自分に自信がある",
      "HighDescription": "起こるかもしれないことについて心配する傾向があります",
      "HighTerm": "心配しがちな",
      "LowDescription": "冷静で自信があるように感じる傾向があります",
      "Big5": "big5_neuroticism"
    },
    "facet_friendliness": {
      "LowTerm": "遠慮がちな",
      "HighDescription": "友達を作るのが容易で、他人が近くにいることを快適に感じます",
      "HighTerm": "外向的な",
      "LowDescription": "プライベートな時間を大切にする人で多くの人々を受け入れません",
      "Big5": "big5_extraversion"
    },
    "facet_modesty": {
      "LowTerm": "自己評価が高い",
      "HighDescription": "注目されるのが苦手です",
      "HighTerm": "謙虚な",
      "LowDescription": "自分を高く評価しており、自分に満足しています",
      "Big5": "big5_agreeableness"
    },
    "facet_activity_level": {
      "LowTerm": "のんびりとしている",
      "HighDescription": "ペースが速く、多様な活動でスケジュールを埋めることを好みます",
      "HighTerm": "精力的な",
      "LowDescription": "ゆったりとしたペースの生活を好みます",
      "Big5": "big5_extraversion"
    },
    "facet_cautiousness": {
      "LowTerm": "大胆な",
      "HighDescription": "意思決定する前に注意深く考えます",
      "HighTerm": "慎重な",
      "LowDescription": "時間をかけて慎重に検討するよりもむしろ即座に行動を起こします",
      "Big5": "big5_conscientiousness"
    },
    "facet_dutifulness": {
      "LowTerm": "無頓着な",
      "HighDescription": "ルールや義務が不便であっても真摯に受け止めます",
      "HighTerm": "本分を守る",
      "LowDescription": "ルールや義務を無視してやりたいことをやります",
      "Big5": "big5_conscientiousness"
    },
    "facet_artistic_interests": {
      "LowTerm": "芸術に無関心な",
      "HighDescription": "美を楽しみ、創造的な経験を追求します",
      "HighTerm": "芸術への理解がある",
      "LowDescription": "我々が調査した人々と比べると、芸術や創作活動にあまり関心がないようです",
      "Big5": "big5_openness"
    },
    "facet_immoderation": {
      "LowTerm": "自制心がある",
      "HighDescription": "強い欲求を持っており、それに惑わされます",
      "HighTerm": "快楽主義な",
      "LowDescription": "自分の欲望をコントロールできますし、強烈な欲望を持ちません",
      "Big5": "big5_neuroticism"
    },
    "facet_emotionality": {
      "LowTerm": "感情に流されない",
      "HighDescription": "自分の感情を自覚していて、どう表現すれば良いかわかっています",
      "HighTerm": "情緒的な",
      "LowDescription": "自分の感情についてしきりに考えたり、感情をおおっぴらに表すことはありません",
      "Big5": "big5_openness"
    },
    "facet_adventurousness": {
      "LowTerm": "安定している",
      "HighDescription": "新しい経験をすることを熱望しています",
      "HighTerm": "冒険的な",
      "LowDescription": "いつもの習慣や日課を好み、そこから逸脱することを望みません",
      "Big5": "big5_openness"
    },
    "facet_anger": {
      "LowTerm": "温和な",
      "HighDescription": "特に物事があなたの考えるとおりに行かないときにかっとなる性格です",
      "HighTerm": "熱しやすい",
      "LowDescription": "滅多に怒りません",
      "Big5": "big5_neuroticism"
    },
    "facet_excitement_seeking": {
      "LowTerm": "平穏を求める",
      "HighDescription": "リスクを取ることで高揚し、忙しくないと退屈に感じます",
      "HighTerm": "興奮を求める",
      "LowDescription": "穏やかで和める、安全な活動を好みます",
      "Big5": "big5_extraversion"
    },
    "facet_cooperation": {
      "LowTerm": "固執する",
      "HighDescription": "文句を言うような気難しさがなく、対立を回避しようとします",
      "HighTerm": "柔軟な",
      "LowDescription": "他人と対立することに尻込みしません",
      "Big5": "big5_agreeableness"
    }
  },
  "needs": {
    "need_practicality": [
      "効率",
      "実用性",
      "高価値",
      "利便性"
    ],
    "need_curiosity": [
      "発見",
      "専門性",
      "知識獲得"
    ],
    "need_stability": [
      "安定",
      "信憑性",
      "信用性"
    ],
    "need_self_expression": [
      "自己表現",
      "自己啓発",
      "個人的強み"
    ],
    "need_structure": [
      "組織への帰属",
      "率直さ",
      "明瞭さ",
      "信頼性"
    ],
    "need_challenge": [
      "名声",
      "競争",
      "栄光"
    ],
    "need_liberty": [
      "現代性",
      "可能性拡大",
      "束縛脱出",
      "自発性",
      "斬新さ"
    ],
    "need_harmony": [
      "幸福",
      "礼儀",
      "丁寧さ"
    ],
    "need_love": [
      "つながり",
      "親近感"
    ],
    "need_excitement": [
      "お祭り騒ぎ",
      "期待",
      "うきうきした気分"
    ],
    "need_ideal": [
      "洗練",
      "崇高さ",
      "優越感",
      "満足感"
    ],
    "need_closeness": [
      "帰属",
      "郷愁",
      "親密さ"
    ]
  },
  "phrases": {
    "Experiences that give a sense of %s hold some appeal to you": "%sを感じられる体験に魅力を感じます",
    "You consider %s to guide a large part of what you do": "%sがあなたの行動に大きな影響を与えています",
    "You value both %s a bit": "両方の%sを少し評価します",
    "And %s": "また%s",
    "And you are %s": "また、%sタイプです",
    "a bit %s": "少し%s",
    "can be perceived as %s": "%s人と思われるかもしれない",
    "You are relatively unconcerned with both %s and %s": "%sと%sの両方にあまりこだわりません",
    "You are %s and %s": "%sタイプであり、また%sタイプです",
    "You value both %s and %s a bit": "%s と%sの両方が少しばかり有用と考えています",
    "You don't find %s to be particularly motivating for you": "%sには特に関心がありません",
    "You are %s": "%sタイプです",
    "You are %s, %s and %s": "%sタイプであり、%sタイプであり、また%sタイプです",
    "Your choices are driven by a desire for %s": "%sを意識して意思決定するタイプです",
    "You are motivated to seek out experiences that provide a strong feeling of %s": "%sにつながる体験を好みます",
    "Experiences that make you feel high %s are generally unappealing to you": "気分が高揚する経験の%sには慨して魅力を感じません",
    "You don't find either %s or %s to be particularly motivating for you": "%s、%sのいずれも関心がありません",
    "You are relatively unconcerned with %s": "%sにはあまりこだわりません",
    "somewhat %s": "多少%s",
    "You value %s a bit more": "%sを多少有用だと考えています",
    "You consider both %s and %s to guide a large part of what you do": "方針を決める際に%sと%sの両方を重要とみなします"
  },
  "traits": {
    "big5_conscientiousness_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "厳格な"
      },
      {
        "perceived_negatively": false,
        "word": "忠実な"
      },
      {
        "perceived_negatively": false,
        "word": "剛直な"
      }
    ],
    "big5_neuroticism_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "ガードが堅い"
      },
      {
        "perceived_negatively": true,
        "word": "いらいらしやすい"
      },
      {
        "perceived_negatively": true,
        "word": "自分に確信が持てない"
      },
      {
        "perceived_negatively": true,
        "word": "悲観的な"
      },
      {
        "perceived_negatively": false,
        "word": "秘密にしたがる"
      },
      {
        "perceived_negatively": true,
        "word": "心配性の"
      },
      {
        "perceived_negatively": true,
        "word": "ものごとを否定的に捉える"
      },
      {
        "perceived_negatively": false,
        "word": "自分に厳しい"
      }
    ],
    "big5_agreeableness_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": true,
        "word": "気配りが苦手な"
      },
      {
        "perceived_negatively": true,
        "word": "よそよそしい"
      },
      {
        "perceived_negatively": true,
        "word": "冷静な"
      },
      {
        "perceived_negatively": true,
        "word": "感情に流されない"
      }
    ],
    "big5_agreeableness_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "情にもろい"
      },
      {
        "perceived_negatively": false,
        "word": "優しい"
      },
      {
        "perceived_negatively": false,
        "word": "活気にあふれる"
      },
      {
        "perceived_negatively": false,
        "word": "柔和な"
      },
      {
        "perceived_negatively": false,
        "word": "情熱的"
      },
      {
        "perceived_negatively": false,
        "word": "ロマンチストの"
      }
    ],
    "big5_conscientiousness_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "形式張らない"
      },
      {
        "perceived_negatively": false,
        "word": "地味な"
      }
    ],
    "big5_agreeableness_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "控えめな"
      },
      {
        "perceived_negatively": false,
        "word": "でしゃばらない"
      }
    ],
    "big5_conscientiousness_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "頼りになる"
      },
      {
        "perceived_negatively": false,
        "word": "責任感がある"
      },
      {
        "perceived_negatively": false,
        "word": "信頼できる"
      },
      {
        "perceived_negatively": false,
        "word": "礼儀正しい"
      },
      {
        "perceived_negatively": false,
        "word": "思いやりのある"
      }
    ],
    "big5_agreeableness_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "頑固な"
      },
      {
        "perceived_negatively": true,
        "word": "飛躍が多い"
      },
      {
        "perceived_negatively": true,
        "word": "荒削りな"
      },
      {
        "perceived_negatively": true,
        "word": "好戦的な"
      },
      {
        "perceived_negatively": true,
        "word": "大まかな"
      },
      {
        "perceived_negatively": false,
        "word": "ちゃめっ気のある"
      },
      {
        "perceived_negatively": true,
        "word": "巧みな"
      },
      {
        "perceived_negatively": true,
        "word": "飾り気のない"
      },
      {
        "perceived_negatively": true,
        "word": "疑われやすい"
      }
    ],
    "big5_neuroticism_plus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "すぐに慌ててしまう"
      },
      {
        "perceived_negatively": false,
        "word": "つい腹を立てやすい"
      },
      {
        "perceived_negatively": false,
        "word": "気遣う"
      }
    ],
    "big5_openness_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": true,
        "word": "簡素好きな"
      },
      {
        "perceived_negatively": true,
        "word": "人に頼りがちなの"
      }
    ],
    "big5_neuroticism_minus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "沈着な"
      },
      {
        "perceived_negatively": true,
        "word": "気配りが苦手な"
      }
    ],
    "big5_agreeableness_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "猪突猛進な"
      },
      {
        "perceived_negatively": true,
        "word": "儀礼にこだわらない、単刀直入な"
      },
      {
        "perceived_negatively": true,
        "word": "全面的には信頼しない"
      },
      {
        "perceived_negatively": true,
        "word": "安易に協調せず、自分の信念を貫く"
      },
      {
        "perceived_negatively": true,
        "word": "議論より実践の"
      }
    ],
    "big5_extraversion_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "活発な"
      },
      {
        "perceived_negatively": false,
        "word": "競争力がある"
      },
      {
        "perceived_negatively": false,
        "word": "粘り強い"
      },
      {
        "perceived_negatively": false,
        "word": "意欲的な"
      },
      {
        "perceived_negatively": false,
        "word": "決断力がある"
      }
    ],
    "big5_agreeableness_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "忠実な"
      },
      {
        "perceived_negatively": false,
        "word": "剛直な"
      },
      {
        "perceived_negatively": true,
        "word": "厳格な"
      }
    ],
    "big5_neuroticism_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "忍耐強い"
      },
      {
        "perceived_negatively": false,
        "word": "リラックスしている"
      },
      {
        "perceived_negatively": false,
        "word": "多くを要求しない"
      },
      {
        "perceived_negatively": false,
        "word": "現実的な"
      },
      {
        "perceived_negatively": false,
        "word": "楽観的な"
      },
      {
        "perceived_negatively": false,
        "word": "思いやりのある"
      },
      {
        "perceived_negatively": false,
        "word": "批判することを遠慮する"
      },
      {
        "perceived_negatively": false,
        "word": "控えめ"
      }
    ],
    "big5_openness_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "平均的な"
      },
      {
        "perceived_negatively": true,
        "word": "いたって普通な"
      },
      {
        "perceived_negatively": false,
        "word": "気分が沈みがちな"
      },
      {
        "perceived_negatively": true,
        "word": "何事にも関心を持たない"
      },
      {
        "perceived_negatively": true,
        "word": "冒険を好まない"
      }
    ],
    "big5_extraversion_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": false,
        "word": "自説を曲げない"
      },
      {
        "perceived_negatively": true,
        "word": "強引なところがある"
      },
      {
        "perceived_negatively": true,
        "word": "支配力を追い求める"
      },
      {
        "perceived_negatively": true,
        "word": "自慢好きな"
      },
      {
        "perceived_negatively": true,
        "word": "親分風の"
      },
      {
        "perceived_negatively": false,
        "word": "支配的な"
      },
      {
        "perceived_negatively": false,
        "word": "抜け目のない"
      }
    ],
    "big5_neuroticism_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "気まぐれな"
      },
      {
        "perceived_negatively": true,
        "word": "熱くなりやすい"
      },
      {
        "perceived_negatively": true,
        "word": "口論好きの"
      },
      {
        "perceived_negatively": true,
        "word": "性急な"
      },
      {
        "perceived_negatively": true,
        "word": "ご機嫌斜めの"
      },
      {
        "perceived_negatively": true,
        "word": "怒りっぽい"
      },
      {
        "perceived_negatively": true,
        "word": "奇妙な"
      }
    ],
    "big5_neuroticism_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "興奮しやすい"
      },
      {
        "perceived_negatively": true,
        "word": "言葉が多い"
      },
      {
        "perceived_negatively": false,
        "word": "異性の気を引こうとする"
      },
      {
        "perceived_negatively": true,
        "word": "熱くなりやすい"
      },
      {
        "perceived_negatively": false,
        "word": "ひどく気前が良い"
      },
      {
        "perceived_negatively": true,
        "word": "移り気な"
      }
    ],
    "big5_agreeableness_minus_big5_openness_minus": [
      {
        "perceived_negatively": true,
        "word": "大雑把な"
      },
      {
        "perceived_negatively": true,
        "word": "機転の利かない"
      },
      {
        "perceived_negatively": true,
        "word": "素っ気ない"
      },
      {
        "perceived_negatively": true,
        "word": "心にゆとりがない"
      },
      {
        "perceived_negatively": true,
        "word": "情にほだされない"
      },
      {
        "perceived_negatively": true,
        "word": "断固とした"
      },
      {
        "perceived_negatively": true,
        "word": "手加減できない"
      },
      {
        "perceived_negatively": true,
        "word": "執念深い"
      }
    ],
    "big5_conscientiousness_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "控えめ"
      },
      {
        "perceived_negatively": false,
        "word": "でしゃばらない"
      }
    ],
    "big5_agreeableness_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "愛想の良い"
      },
      {
        "perceived_negatively": false,
        "word": "如才ない"
      },
      {
        "perceived_negatively": false,
        "word": "駆引きがうまい"
      },
      {
        "perceived_negatively": false,
        "word": "深みがある"
      },
      {
        "perceived_negatively": false,
        "word": "理想家の"
      }
    ],
    "big5_agreeableness_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": true,
        "word": "批判的な"
      },
      {
        "perceived_negatively": true,
        "word": "利己的な"
      },
      {
        "perceived_negatively": true,
        "word": "怒りっぽい"
      },
      {
        "perceived_negatively": true,
        "word": "対立する"
      },
      {
        "perceived_negatively": true,
        "word": "ご機嫌斜めの"
      },
      {
        "perceived_negatively": true,
        "word": "厳しい"
      },
      {
        "perceived_negatively": true,
        "word": "社交が苦手な"
      },
      {
        "perceived_negatively": true,
        "word": "人に要求しがちな"
      }
    ],
    "big5_openness_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "沈着な"
      },
      {
        "perceived_negatively": true,
        "word": "気配りが苦手な"
      }
    ],
    "big5_conscientiousness_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "洗練されている"
      },
      {
        "perceived_negatively": false,
        "word": "完璧を追求する"
      },
      {
        "perceived_negatively": false,
        "word": "勤勉な"
      },
      {
        "perceived_negatively": false,
        "word": "品位がある"
      },
      {
        "perceived_negatively": false,
        "word": "上品な"
      },
      {
        "perceived_negatively": false,
        "word": "教養がある"
      },
      {
        "perceived_negatively": false,
        "word": "先見の明のある"
      }
    ],
    "big5_agreeableness_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "鋭敏な"
      },
      {
        "perceived_negatively": false,
        "word": "風変わりな"
      },
      {
        "perceived_negatively": false,
        "word": "個性的な"
      }
    ],
    "big5_neuroticism_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "興奮しやすい"
      },
      {
        "perceived_negatively": false,
        "word": "情熱的"
      },
      {
        "perceived_negatively": false,
        "word": "肉感的な"
      }
    ],
    "big5_neuroticism_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "情に厚い"
      },
      {
        "perceived_negatively": false,
        "word": "多芸な"
      },
      {
        "perceived_negatively": false,
        "word": "創造的な"
      },
      {
        "perceived_negatively": false,
        "word": "知的な"
      },
      {
        "perceived_negatively": false,
        "word": "洞察力がある"
      }
    ],
    "big5_openness_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "慣習を重んじる"
      },
      {
        "perceived_negatively": false,
        "word": "伝統を守る"
      }
    ],
    "big5_extraversion_plus_big5_openness_minus": [
      {
        "perceived_negatively": true,
        "word": "言葉数が多い"
      },
      {
        "perceived_negatively": true,
        "word": "めんどくさがりな"
      },
      {
        "perceived_negatively": true,
        "word": "気取った"
      }
    ],
    "big5_extraversion_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "内部志向型な"
      },
      {
        "perceived_negatively": false,
        "word": "内省的な"
      },
      {
        "perceived_negatively": false,
        "word": "よく瞑想にふける"
      },
      {
        "perceived_negatively": false,
        "word": "熟考する"
      },
      {
        "perceived_negatively": false,
        "word": "自省する"
      }
    ],
    "big5_openness_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "目の前のことに専念する"
      },
      {
        "perceived_negatively": false,
        "word": "型破りな"
      },
      {
        "perceived_negatively": true,
        "word": "理屈に拘らない"
      },
      {
        "perceived_negatively": true,
        "word": "子どもっぽい"
      },
      {
        "perceived_negatively": true,
        "word": "ぶっつけ本番、出たとこ勝負の"
      },
      {
        "perceived_negatively": false,
        "word": "曖昧な"
      },
      {
        "perceived_negatively": true,
        "word": "浮ついたところのある"
      }
    ],
    "big5_extraversion_minus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "物静かな"
      },
      {
        "perceived_negatively": false,
        "word": "落ち着いている"
      },
      {
        "perceived_negatively": false,
        "word": "穏やかな"
      },
      {
        "perceived_negatively": false,
        "word": "偏見がない"
      },
      {
        "perceived_negatively": false,
        "word": "高ぶらない"
      },
      {
        "perceived_negatively": false,
        "word": "素直な"
      }
    ],
    "big5_conscientiousness_plus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "伝統を守る"
      },
      {
        "perceived_negatively": false,
        "word": "慣習を重んじる"
      }
    ],
    "big5_openness_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "創造的な"
      },
      {
        "perceived_negatively": false,
        "word": "知的な"
      },
      {
        "perceived_negatively": false,
        "word": "洞察力がある"
      },
      {
        "perceived_negatively": false,
        "word": "多芸な"
      },
      {
        "perceived_negatively": false,
        "word": "創造性がある"
      }
    ],
    "big5_agreeableness_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "心が優しい"
      },
      {
        "perceived_negatively": false,
        "word": "快い"
      },
      {
        "perceived_negatively": false,
        "word": "好意的な"
      },
      {
        "perceived_negatively": false,
        "word": "控えめな"
      },
      {
        "perceived_negatively": true,
        "word": "慈悲深い"
      }
    ],
    "big5_extraversion_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "鵜呑みにしない"
      },
      {
        "perceived_negatively": true,
        "word": "精力的でない"
      },
      {
        "perceived_negatively": true,
        "word": "対応がゆっくりな"
      },
      {
        "perceived_negatively": true,
        "word": "持続力に欠ける"
      },
      {
        "perceived_negatively": true,
        "word": "あやふやな"
      }
    ],
    "big5_openness_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "分析好きな"
      },
      {
        "perceived_negatively": false,
        "word": "明敏な"
      },
      {
        "perceived_negatively": false,
        "word": "物知りな"
      },
      {
        "perceived_negatively": false,
        "word": "明確に述べる"
      },
      {
        "perceived_negatively": false,
        "word": "品位がある"
      },
      {
        "perceived_negatively": false,
        "word": "教養がある"
      }
    ],
    "big5_openness_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "言葉数が多い"
      },
      {
        "perceived_negatively": true,
        "word": "めんどくさがりな"
      },
      {
        "perceived_negatively": true,
        "word": "気取った"
      }
    ],
    "big5_conscientiousness_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "気が早い"
      },
      {
        "perceived_negatively": true,
        "word": "安易に協調せず、自分の信念を貫く"
      },
      {
        "perceived_negatively": true,
        "word": "頼りない"
      },
      {
        "perceived_negatively": true,
        "word": "全面的には信頼しない"
      },
      {
        "perceived_negatively": true,
        "word": "議論より実践の"
      }
    ],
    "big5_agreeableness_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "寛大な"
      },
      {
        "perceived_negatively": false,
        "word": "愉快な"
      },
      {
        "perceived_negatively": false,
        "word": "寛容な"
      },
      {
        "perceived_negatively": false,
        "word": "平和的な"
      },
      {
        "perceived_negatively": false,
        "word": "柔軟な"
      },
      {
        "perceived_negatively": false,
        "word": "気楽な"
      },
      {
        "perceived_negatively": false,
        "word": "フェアな"
      },
      {
        "perceived_negatively": false,
        "word": "慈悲深い"
      },
      {
        "perceived_negatively": false,
        "word": "信じやすい"
      }
    ],
    "big5_openness_plus_big5_agreeableness_minus": [
      {
        "perceived_negatively": false,
        "word": "鋭敏な"
      },
      {
        "perceived_negatively": false,
        "word": "変わった"
      },
      {
        "perceived_negatively": false,
        "word": "個性的な"
      }
    ],
    "big5_conscientiousness_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "意欲的な"
      },
      {
        "perceived_negatively": false,
        "word": "注意深い"
      },
      {
        "perceived_negatively": false,
        "word": "堅固な"
      },
      {
        "perceived_negatively": false,
        "word": "決断力がある"
      },
      {
        "perceived_negatively": false,
        "word": "競争力がある"
      }
    ],
    "big5_openness_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "理想家の"
      },
      {
        "perceived_negatively": false,
        "word": "駆引きがうまい"
      },
      {
        "perceived_negatively": false,
        "word": "深みがある"
      },
      {
        "perceived_negatively": false,
        "word": "如才ない"
      },
      {
        "perceived_negatively": false,
        "word": "愛想の良い"
      }
    ],
    "big5_conscientiousness_minus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "型破りな"
      },
      {
        "perceived_negatively": true,
        "word": "理屈に拘らない"
      },
      {
        "perceived_negatively": true,
        "word": "子どもっぽい"
      },
      {
        "perceived_negatively": true,
        "word": "ぶっつけ本番、出たとこ勝負の"
      },
      {
        "perceived_negatively": false,
        "word": "曖昧な"
      },
      {
        "perceived_negatively": true,
        "word": "浮ついたところのある"
      }
    ],
    "big5_conscientiousness_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "独特な"
      },
      {
        "perceived_negatively": true,
        "word": "緊張しがちな"
      }
    ],
    "big5_neuroticism_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "気取らない"
      },
      {
        "perceived_negatively": false,
        "word": "物事に飽きない"
      },
      {
        "perceived_negatively": false,
        "word": "不屈な"
      }
    ],
    "big5_openness_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "大雑把な"
      },
      {
        "perceived_negatively": true,
        "word": "機転の利かない"
      },
      {
        "perceived_negatively": true,
        "word": "素っ気ない"
      },
      {
        "perceived_negatively": true,
        "word": "心にゆとりがない"
      },
      {
        "perceived_negatively": true,
        "word": "情にほだされない"
      }
    ],
    "big5_neuroticism_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "情緒的な"
      },
      {
        "perceived_negatively": true,
        "word": "疑うことを知らない"
      },
      {
        "perceived_negatively": false,
        "word": "優しい"
      },
      {
        "perceived_negatively": false,
        "word": "敏感な"
      },
      {
        "perceived_negatively": false,
        "word": "柔和な"
      }
    ],
    "big5_extraversion_minus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "非攻撃的な"
      },
      {
        "perceived_negatively": false,
        "word": "控えめな"
      },
      {
        "perceived_negatively": false,
        "word": "素直に対応する"
      },
      {
        "perceived_negatively": false,
        "word": "気が小さい"
      },
      {
        "perceived_negatively": false,
        "word": "適合力のある"
      },
      {
        "perceived_negatively": false,
        "word": "単純な"
      }
    ],
    "big5_agreeableness_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "はしゃぐ"
      },
      {
        "perceived_negatively": false,
        "word": "幸福そうな"
      },
      {
        "perceived_negatively": false,
        "word": "親しみやすい"
      },
      {
        "perceived_negatively": false,
        "word": "面白い"
      },
      {
        "perceived_negatively": false,
        "word": "陽気な"
      },
      {
        "perceived_negatively": false,
        "word": "ユーモアがある"
      }
    ],
    "big5_openness_plus_big5_extraversion_plus": [
      {
        "perceived_negatively": false,
        "word": "世知に長けた"
      },
      {
        "perceived_negatively": false,
        "word": "劇場的な"
      },
      {
        "perceived_negatively": false,
        "word": "雄弁な"
      },
      {
        "perceived_negatively": false,
        "word": "探究的な"
      },
      {
        "perceived_negatively": false,
        "word": "情熱的な"
      }
    ],
    "big5_extraversion_minus_big5_openness_minus": [
      {
        "perceived_negatively": false,
        "word": "気分が沈みがちな"
      },
      {
        "perceived_negatively": true,
        "word": "おとなしい"
      },
      {
        "perceived_negatively": true,
        "word": "冒険を好まない"
      },
      {
        "perceived_negatively": false,
        "word": "受け身な"
      },
      {
        "perceived_negatively": true,
        "word": "何事にも関心を持たない"
      },
      {
        "perceived_negatively": false,
        "word": "素直な"
      }
    ],
    "big5_extraversion_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "節度がある"
      },
      {
        "perceived_negatively": false,
        "word": "まじめな"
      },
      {
        "perceived_negatively": false,
        "word": "慎重な"
      },
      {
        "perceived_negatively": false,
        "word": "用心深い"
      },
      {
        "perceived_negatively": false,
        "word": "信念を持ってる"
      }
    ],
    "big5_neuroticism_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "高ぶらない"
      },
      {
        "perceived_negatively": true,
        "word": "興奮しない"
      },
      {
        "perceived_negatively": false,
        "word": "穏やかな"
      },
      {
        "perceived_negatively": false,
        "word": "物静かな"
      }
    ],
    "big5_extraversion_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "熱くなりやすい"
      },
      {
        "perceived_negatively": true,
        "word": "言葉が多い"
      },
      {
        "perceived_negatively": false,
        "word": "ひどく気前が良い"
      },
      {
        "perceived_negatively": true,
        "word": "気まぐれな"
      },
      {
        "perceived_negatively": false,
        "word": "異性の気を引こうとする"
      }
    ],
    "big5_extraversion_plus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "表現に富む"
      },
      {
        "perceived_negatively": false,
        "word": "率直な"
      },
      {
        "perceived_negatively": false,
        "word": "ドラマティックな"
      },
      {
        "perceived_negatively": false,
        "word": "自発的な"
      },
      {
        "perceived_negatively": false,
        "word": "機知に富んでいる"
      },
      {
        "perceived_negatively": false,
        "word": "機を見るに敏な"
      },
      {
        "perceived_negatively": false,
        "word": "自立している"
      }
    ],
    "big5_conscientiousness_minus_big5_openness_plus": [
      {
        "perceived_negatively": false,
        "word": "慣例にとらわれない"
      },
      {
        "perceived_negatively": false,
        "word": "奇抜な"
      }
    ],
    "big5_extraversion_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": false,
        "word": "物事に懐疑的な"
      },
      {
        "perceived_negatively": false,
        "word": "人に用心深い"
      },
      {
        "perceived_negatively": true,
        "word": "引っ込み思案な"
      },
      {
        "perceived_negatively": true,
        "word": "無口な"
      },
      {
        "perceived_negatively": true,
        "word": "社交が苦手な"
      },
      {
        "perceived_negatively": true,
        "word": "心配そうな"
      },
      {
        "perceived_negatively": true,
        "word": "私心がない"
      },
      {
        "perceived_negatively": false,
        "word": "超然とした"
      }
    ],
    "big5_conscientiousness_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": true,
        "word": "ぼーっとしてる"
      },
      {
        "perceived_negatively": true,
        "word": "臨機応変な"
      },
      {
        "perceived_negatively": true,
        "word": "風変わりな"
      },
      {
        "perceived_negatively": true,
        "word": "忘れっぽい"
      },
      {
        "perceived_negatively": true,
        "word": "衝動的な"
      },
      {
        "perceived_negatively": true,
        "word": "勝手気ままな"
      }
    ],
    "big5_conscientiousness_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "徹底している"
      },
      {
        "perceived_negatively": false,
        "word": "着実な"
      },
      {
        "perceived_negatively": false,
        "word": "一貫している"
      },
      {
        "perceived_negatively": false,
        "word": "自制力がある"
      },
      {
        "perceived_negatively": false,
        "word": "論理的"
      },
      {
        "perceived_negatively": false,
        "word": "決定力のある"
      },
      {
        "perceived_negatively": false,
        "word": "統制された"
      },
      {
        "perceived_negatively": false,
        "word": "簡潔な"
      }
    ],
    "big5_openness_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "すぐに慌ててしまう"
      },
      {
        "perceived_negatively": false,
        "word": "つい腹を立てやすい"
      },
      {
        "perceived_negatively": false,
        "word": "気遣う"
      }
    ],
    "big5_agreeableness_plus_big5_openness_minus": [
      {
        "perceived_negatively": true,
        "word": "人に頼りがちな"
      },
      {
        "perceived_negatively": true,
        "word": "簡素好きな"
      }
    ],
    "big5_conscientiousness_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "用心深い"
      },
      {
        "perceived_negatively": false,
        "word": "自信のある"
      },
      {
        "perceived_negatively": false,
        "word": "時間厳守する"
      },
      {
        "perceived_negatively": false,
        "word": "儀礼的な"
      },
      {
        "perceived_negatively": false,
        "word": "やりくりがうまい"
      },
      {
        "perceived_negatively": false,
        "word": "信念を持ってる"
      }
    ],
    "big5_agreeableness_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "役立つ"
      },
      {
        "perceived_negatively": false,
        "word": "協力的な"
      },
      {
        "perceived_negatively": false,
        "word": "思いやりのある"
      },
      {
        "perceived_negatively": false,
        "word": "礼儀正しい"
      },
      {
        "perceived_negatively": false,
        "word": "丁寧な"
      },
      {
        "perceived_negatively": false,
        "word": "道理をわきまえる"
      },
      {
        "perceived_negatively": false,
        "word": "丁重な"
      },
      {
        "perceived_negatively": false,
        "word": "思慮深い"
      },
      {
        "perceived_negatively": false,
        "word": "忠実な"
      },
      {
        "perceived_negatively": false,
        "word": "モラルがある"
      }
    ],
    "big5_neuroticism_minus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "合理的な"
      },
      {
        "perceived_negatively": false,
        "word": "公平な"
      },
      {
        "perceived_negatively": false,
        "word": "着実な"
      },
      {
        "perceived_negatively": false,
        "word": "論理的"
      },
      {
        "perceived_negatively": false,
        "word": "決定力のある"
      },
      {
        "perceived_negatively": false,
        "word": "落ち着いている"
      },
      {
        "perceived_negatively": false,
        "word": "簡潔な"
      },
      {
        "perceived_negatively": false,
        "word": "徹底している"
      },
      {
        "perceived_negatively": false,
        "word": "経済的な"
      },
      {
        "perceived_negatively": false,
        "word": "自制力がある"
      }
    ],
    "big5_extraversion_plus_big5_neuroticism_minus": [
      {
        "perceived_negatively": false,
        "word": "自信のある"
      },
      {
        "perceived_negatively": false,
        "word": "大胆な"
      },
      {
        "perceived_negatively": false,
        "word": "確信を持った"
      },
      {
        "perceived_negatively": false,
        "word": "単刀直入な"
      },
      {
        "perceived_negatively": false,
        "word": "精神的に強い"
      },
      {
        "perceived_negatively": false,
        "word": "困難に立ち向かう"
      },
      {
        "perceived_negatively": false,
        "word": "自己に満足している"
      },
      {
        "perceived_negatively": false,
        "word": "元気いっぱいな"
      },
      {
        "perceived_negatively": false,
        "word": "たくましい"
      }
    ],
    "big5_agreeableness_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": true,
        "word": "斜に構えた"
      },
      {
        "perceived_negatively": true,
        "word": "人に用心深い"
      },
      {
        "perceived_negatively": true,
        "word": "引っ込み思案な"
      },
      {
        "perceived_negatively": true,
        "word": "私心がない"
      },
      {
        "perceived_negatively": true,
        "word": "客観的な"
      },
      {
        "perceived_negatively": true,
        "word": "心配そうな"
      }
    ],
    "big5_neuroticism_minus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "形式張らない"
      },
      {
        "perceived_negatively": false,
        "word": "地味な"
      }
    ],
    "big5_neuroticism_minus_big5_agreeableness_minus": [
      {
        "perceived_negatively": true,
        "word": "感情に流されない"
      },
      {
        "perceived_negatively": true,
        "word": "気配りが苦手な"
      },
      {
        "perceived_negatively": true,
        "word": "よそよそしい"
      },
      {
        "perceived_negatively": true,
        "word": "冷静な"
      }
    ],
    "big5_extraversion_minus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "ガードが堅い"
      },
      {
        "perceived_negatively": false,
        "word": "悲観的な"
      },
      {
        "perceived_negatively": false,
        "word": "隠したがる"
      },
      {
        "perceived_negatively": true,
        "word": "気の小さい"
      },
      {
        "perceived_negatively": false,
        "word": "隠したがる"
      }
    ],
    "big5_openness_plus_big5_extraversion_minus": [
      {
        "perceived_negatively": false,
        "word": "内省的な"
      },
      {
        "perceived_negatively": false,
        "word": "よく瞑想にふける"
      },
      {
        "perceived_negatively": false,
        "word": "熟考する"
      },
      {
        "perceived_negatively": false,
        "word": "自省する"
      },
      {
        "perceived_negatively": false,
        "word": "内部志向型な"
      }
    ],
    "big5_extraversion_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "ひどく陽気な"
      },
      {
        "perceived_negatively": false,
        "word": "いたずら好きな"
      },
      {
        "perceived_negatively": false,
        "word": "自己の主張に強い信念をもっている"
      },
      {
        "perceived_negatively": false,
        "word": "社交的な"
      },
      {
        "perceived_negatively": false,
        "word": "感情を表に出す"
      }
    ],
    "big5_conscientiousness_minus_big5_extraversion_plus": [
      {
        "perceived_negatively": true,
        "word": "気ままな"
      },
      {
        "perceived_negatively": false,
        "word": "ひどく陽気な"
      },
      {
        "perceived_negatively": true,
        "word": "向こう見ずな"
      },
      {
        "perceived_negatively": true,
        "word": "がむしゃらな"
      },
      {
        "perceived_negatively": false,
        "word": "感情を表に出す"
      }
    ],
    "big5_openness_plus_big5_neuroticism_plus": [
      {
        "perceived_negatively": false,
        "word": "情熱的"
      },
      {
        "perceived_negatively": false,
        "word": "興奮しやすい"
      },
      {
        "perceived_negatively": false,
        "word": "肉感的な"
      }
    ],
    "big5_extraversion_plus_big5_agreeableness_plus": [
      {
        "perceived_negatively": false,
        "word": "社会的な"
      },
      {
        "perceived_negatively": false,
        "word": "精力的な"
      },
      {
        "perceived_negatively": false,
        "word": "熱中しやすい"
      },
      {
        "perceived_negatively": false,
        "word": "おしゃべり好きな"
      },
      {
        "perceived_negatively": false,
        "word": "敏感な"
      },
      {
        "perceived_negatively": false,
        "word": "元気な"
      },
      {
        "perceived_negatively": false,
        "word": "人をひきつける"
      },
      {
        "perceived_negatively": false,
        "word": "何事にも熱心な"
      }
    ],
    "big5_neuroticism_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": true,
        "word": "何かをせずにいられない"
      },
      {
        "perceived_negatively": true,
        "word": "おせっかいな"
      },
      {
        "perceived_negatively": true,
        "word": "気ままな"
      },
      {
        "perceived_negatively": true,
        "word": "忘れやすい"
      },
      {
        "perceived_negatively": true,
        "word": "衝動的な"
      }
    ],
    "big5_openness_plus_big5_conscientiousness_minus": [
      {
        "perceived_negatively": false,
        "word": "慣例にとらわれない"
      },
      {
        "perceived_negatively": false,
        "word": "奇抜な"
      }
    ],
    "big5_conscientiousness_minus_big5_extraversion_minus": [
      {
        "perceived_negatively": true,
        "word": "優柔不断な"
      },
      {
        "perceived_negatively": true,
        "word": "目的がない"
      },
      {
        "perceived_negatively": false,
        "word": "気が抜けている"
      },
      {
        "perceived_negatively": false,
        "word": "当り障りがない"
      },
      {
        "perceived_negatively": true,
        "word": "野心的でない"
      }
    ],
    "big5_neuroticism_plus_big5_conscientiousness_plus": [
      {
        "perceived_negatively": false,
        "word": "独特な"
      },
      {
        "perceived_negatively": true,
        "word": "神経質な"
      }
    ]
  },
  "values": {
    "value_self_transcendence": [
      {
        "Term": "他人への支援",
        "LowDescription": "人は干渉されずに自分で物事に対処できると思われています",
        "HighDescription": "自分のまわりの人々を世話することは重要であると考えます"
      },
      {
        "Term": "公平",
        "LowDescription": "人は自ら機会を作っていくものと信じます",
        "HighDescription": "社会正義と全ての人の平等を信じます"
      },
      {
        "Term": "社会正義",
        "LowDescription": "人は自ら機会を作っていくものと信じます",
        "HighDescription": "社会正義と全ての人の平等を信じます"
      },
      {
        "Term": "平等",
        "LowDescription": "人は自ら機会を作っていくものと信じます",
        "HighDescription": "社会正義と全ての人の平等を信じます"
      },
      {
        "Term": "コミュニティ・サービス",
        "LowDescription": "干渉されずに自分で物事に対処できると思われています",
        "HighDescription": "自分のまわりの人々を世話することは重要であると考えます"
      }
    ],
    "value_hedonism": [
      {
        "Term": "生活を楽しむこと",
        "LowDescription": "単なる個人の楽しみよりも大きな目標を伴う行動を優先します",
        "HighDescription": "人生を最大限に楽しもうとしています"
      }
    ],
    "value_conservation": [
      {
        "Term": "伝統",
        "LowDescription": "人が通った道よりもわが道を行くことを大切にします",
        "HighDescription": "自分が属するグループに敬意を払い、それらのガイダンスに従います"
      },
      {
        "Term": "調和",
        "LowDescription": "何が正しいか、他人がどう思うかではなく、自分の信条で決定します",
        "HighDescription": "規則は理由があって存在すると知っており、それらを破らないようにしています"
      },
      {
        "Term": "謙虚",
        "LowDescription": "何が正しいか、他人がどう思うかではなく、自分の信条で決定します",
        "HighDescription": "他人に従うことに価値を見出します"
      },
      {
        "Term": "社会規範",
        "LowDescription": "何が正しいか、他人がどう思うかではなく、自分の信条で決定します",
        "HighDescription": "規則は理由があって存在すると知っており、それらを破らないようにしています"
      },
      {
        "Term": "セキュリティー",
        "LowDescription": "目的を達成するためにはセキュリティーが犠牲になってもよいと信じます",
        "HighDescription": "安全性とセキュリティーは守るべき重要なものであると信じます"
      },
      {
        "Term": "安全性",
        "LowDescription": "目的を達成するためには安全性が犠牲になってもよいと信じます",
        "HighDescription": "安全性とセキュリティは守るべき重要なものであると信じます"
      }
    ],
    "value_self_enhancement": [
      {
        "Term": "成功すること",
        "LowDescription": "自分の才能を誇示することにあまり拘らず意思決定します",
        "HighDescription": "自分自身を向上させ、自分が有能な人であることを実証する機会を探しています"
      },
      {
        "Term": "社会的地位の獲得",
        "LowDescription": "社会的地位に満足していて、それ以上を強くは望んでいません",
        "HighDescription": "自分の地位と世間体を向上するために相当な努力を行います"
      },
      {
        "Term": "野心",
        "LowDescription": "社会的地位に満足していて、それ以上を強くは望んでいません",
        "HighDescription": "ゴールへ突き進むことが重要であると感じます"
      },
      {
        "Term": "大成功",
        "LowDescription": "自分の才能を誇示することにあまり拘らず意思決定します",
        "HighDescription": "自分自身を向上させ、自分が有能な人であることを実証する機会を探しています"
      }
    ],
    "value_openness_to_change": [
      {
        "Term": "自主性",
        "LowDescription": "他人が自分の行動の指揮をとることを受け入れます",
        "HighDescription": "最高の成果が得られるよう、自分自身で目標を設定する傾向があります"
      },
      {
        "Term": "興奮",
        "LowDescription": "危険を冒して新しいことに挑むより、悪くないと分かっていることを選びます",
        "HighDescription": "新しく刺激的な経験をすることを熱望しています"
      },
      {
        "Term": "創造性",
        "LowDescription": "危険を冒して新しいことに挑むより、悪くないと分かっていることを選びます",
        "HighDescription": "新しく刺激的な経験をすることを熱望しています"
      },
      {
        "Term": "好奇心",
        "LowDescription": "危険を冒して新しいことに挑むより、悪くないと分かっていることを選びます",
        "HighDescription": "新しく刺激的な経験をすることを熱望しています"
      },
      {
        "Term": "主体性",
        "LowDescription": "他人が自分の行動の指揮をとることを受け入れます",
        "HighDescription": "最高の成果が得られるよう、自分自身で目標を設定する傾向があります"
      },
      {
        "Term": "自由",
        "LowDescription": "他人が自分の行動の指揮をとることを受け入れます",
        "HighDescription": "最高の成果が得られるよう、自分自身で目標を設定する傾向があります"
      }
    ]
  }
}

},{}],8:[function(require,module,exports){
module.exports={
  "big5": {
    "big5_openness": {
      "HighDescription": "지적으로 호기심이 있고, 감정적으로 인식하며, 심미적인 것에 대한 감성이 풍부하고 새로운 것을 시도 할 의향이 있습니다. ",
      "LowDescription": "단조롭고 간단한 것을 선호하고, 복잡하고 모호하며 미묘한 것보다 분명한 것을 선호합니다."
    },
    "big5_conscientiousness": {
      "HighDescription": "보다 자기훈련이 되었고 충실함. 혹은 예상 밖이거나 척도에 거스르는 것에 반한 성취를 목표로 합니다. ",
      "LowDescription": "계획적인 것보다 즉흥적으로 선호하는 경향이 있습니다."
    },
    "big5_extraversion": {
      "HighDescription": "보다 활기차고 확연한 외부세계와의 관계. 상위그룹의 가시성, 대화하는 것 그리고 자기주장을 하는 것과 같이. ",
      "LowDescription": "사회세계에서 더 독립적인 것과 덜 자극적인 것이 필요합니다. 그것은 그들이 부끄럼을 탄다거나, 친화적이지 않다거나, 반사회적이라는 것을 의미하지는 않습니다."
    },
    "big5_agreeableness": {
      "HighDescription": "다른사람들과 함께하는 가치. 그들은 인간 본성에 대해 보다 낙관적인 견해를 가지고 있습니다. ",
      "LowDescription": "다른 사람들보다 자기 이익을 중시합니다. 그들은 다른 사람들의 동기유발에 회의적입니다."
    },
    "big5_neuroticism": {
      "HighDescription": "부정적인 감정을 갖거나 화를 낼 가능성이 더 큽니다. 그것은 그들이 힘든 시기를 겪고 있음을 의미 할 수 있습니다. ",
      "LowDescription": "더 평온하고, 화를 낼 가능성이 더 적습니다. 그렇다고 그들이 긍정적이거나 행복한 사람들이라는 의미는 아닙니다."
    }
  },
	"facets": {
		"facet_intellect": {
			"LowTerm": "구체적인",
			"HighDescription": "귀하는 새로운 아이디어에 흥미와 열린마음을 가지고 있고, 그것들을 탐구하는 것을 좋아합니다",
			"HighTerm": "철학적인",
			"LowDescription": "귀하는 추상적인 생각을 거의 고려하지 않고, 있는 그대로 처리하는 것을 선호합니다",
			"Big5": "big5_openness"
		},
		"facet_gregariousness": {
			"LowTerm": "의존적인",
			"HighDescription": "귀하는 다른 사람들과 함께하는 것을 좋아합니다",
			"HighTerm": "사교적인",
			"LowDescription": "귀하는 자신만의 시간을 갖고 싶어하는 강한 열망이 있습니다",
			"Big5": "big5_extraversion"
		},
		"facet_achievement_striving": {
			"LowTerm": "만족하는",
			"HighDescription": "귀하는 자신을 위한 높은 목표를 가지고 있으며 그것을 달성하기 위해 열심히 노력합니다",
			"HighTerm": "의욕이 넘치는",
			"LowDescription": "귀하는 귀하의 성취수준에 만족하여 야심찬 목표를 설정할 필요성을 느끼지 못합니다",
			"Big5": "big5_conscientiousness"
		},
		"facet_depression": {
			"LowTerm": "만족하는",
			"HighDescription": "귀하가 행복해하지 않는 일에 대해 꽤 자주 생각합니다",
			"HighTerm": "우울한",
			"LowDescription": "귀하는 일반적으로 자기자신을 편하게 느낍니다",
			"Big5": "big5_neuroticism"
		},
		"facet_sympathy": {
			"LowTerm": "무정한",
			"HighDescription": "귀하는 다른 사람들이 느끼는 것을 느끼고 그들에게 동정심을 가집니다",
			"HighTerm": "이해심이 있는",
			"LowDescription": "귀하는 사람들이 일반적으로 다른 사람들보다 자신에게 더 의존해야한다고 생각합니다",
			"Big5": "big5_agreeableness"
		},
		"facet_imagination": {
			"LowTerm": "현실적인",
			"HighDescription": "귀하는 엉뚱한 상상력을 가지고 있습니다",
			"HighTerm": "상상력이 풍부한",
			"LowDescription": "귀하는 환상보다 사실을 선호합니다",
			"Big5": "big5_openness"
		},
		"facet_self_discipline": {
			"LowTerm": "간헐적인",
			"HighDescription": "귀하는 어려운 작업과 맞서 싸우고 수행할 수 있습니다",
			"HighTerm": "끈질긴",
			"LowDescription": "귀하는 어려운 작업을 오랜 기간 수행하는데 어려움을 겪고 있습니다",
			"Big5": "big5_conscientiousness"
		},
		"facet_assertiveness": {
			"LowTerm": "조용한",
			"HighDescription": "귀하는 상황을 대변하고 책임지는 경향이 있으며, 그룹을 이끄는게 편안합니다",
			"HighTerm": "적극적인",
			"LowDescription": "귀하는 특히 그룹 상황에서 말하는 것보다 듣는 것을 더 선호합니다",
			"Big5": "big5_extraversion"
		},
		"facet_cheerfulness": {
			"LowTerm": "근엄한",
			"HighDescription": "귀하는 즐거운 사람이고 그 기쁨을 세상과 공유합니다",
			"HighTerm": "쾌활한",
			"LowDescription": "귀하는 일반적으로 심각하고 자주 농담하지 않습니다",
			"Big5": "big5_extraversion"
		},
		"facet_self_efficacy": {
			"LowTerm": "자신감이 부족한",
			"HighDescription": "귀하는 귀하가 시작한 일을 성공적으로 수행하는 능력이 있다고 느낍니다",
			"HighTerm": "자신감있는",
			"LowDescription": "귀하는 귀하의 목표를 달성하는 능력에 자주 의문이 생깁니다",
			"Big5": "big5_conscientiousness"
		},
		"facet_morality": {
			"LowTerm": "타협적인",
			"HighDescription": "귀하는 출세하기 위해 다른 사람들을 이용하는 것이 잘못 되었다고 생각합니다",
			"HighTerm": "타협하지않는",
			"LowDescription": "귀하는 귀하가 원하는 것을 얻기 위해 모든 가능한 방법을 사용하는 것이 편안합니다",
			"Big5": "big5_agreeableness"
		},
		"facet_liberalism": {
			"LowTerm": "권위를 존중하는",
			"HighDescription": "귀하는 긍정적인 변화를 가져올 수 있도록 하기 위해 권위와 전통적 가치에 도전하는 것을 선호합니다",
			"HighTerm": "권위에 도전하는",
			"LowDescription": "귀하는 안정감을 유지하기 위해 전통을 따르는 것을 선호합니다",
			"Big5": "big5_openness"
		},
		"facet_altruism": {
			"LowTerm": "자기중심적인",
			"HighDescription": "귀하는 다른 사람들을 도울 때 성취감을 느낄 것이고, 그렇게 하기위해 특별히 애를 쓸 것 입니다",
			"HighTerm": "이타적인",
			"LowDescription": "귀하는 다른 사람들을 위해 시간을 보내는 것보다 자신을 돌보는 것이 더 신경씁니다",
			"Big5": "big5_agreeableness"
		},
		"facet_self_consciousness": {
			"LowTerm": "자신감있는",
			"HighDescription": "귀하는 다른 사람들이 귀하에 대해 생각하고 있는 것에 민감합니다",
			"HighTerm": "남의 시선을 의식하는",
			"LowDescription": "당신은 당황하기가 어렵고 대체로 자신감이 있습니다",
			"Big5": "big5_neuroticism"
		},
		"facet_vulnerability": {
			"LowTerm": "압박감을 받아도 침착한",
			"HighDescription": "귀하는 스트레스가 많은 상황에서 쉽게 압도됩니다",
			"HighTerm": "스트레스에 민감한",
			"LowDescription": "귀하는 예기치 않은 사건을 침착하고 효과적으로 처리합니다",
			"Big5": "big5_neuroticism"
		},
		"facet_trust": {
			"LowTerm": "타인을 조심하는",
			"HighDescription": "귀하는 다른 사람들을 가장 잘 믿으며 사람들을 쉽게 신뢰합니다",
			"HighTerm": "타인을 신뢰하는",
			"LowDescription": "귀하는 다른 사람들의 의도에 조심성이 있으며 쉽게 신뢰하지 않습니다",
			"Big5": "big5_agreeableness"
		},
		"facet_orderliness": {
			"LowTerm": "조직화 되지않은",
			"HighDescription": "귀하는 인생에서 체계적인 것들에 대한 강한 필요성을 느낍니다",
			"HighTerm": "조직적인",
			"LowDescription": "귀하는 일상생활에서 조직을 위해 많은 시간을 보내지 않습니다",
			"Big5": "big5_conscientiousness"
		},
		"facet_anxiety": {
			"LowTerm": "자신감있는",
			"HighDescription": "귀하는 일어날 수 있는 일에 대해 걱정하는 경향이 있습니다",
			"HighTerm": "걱정을 잘하는",
			"LowDescription": "귀하는 평온하고 자신감이 있는 경향이 있습니다",
			"Big5": "big5_neuroticism"
		},
		"facet_friendliness": {
			"LowTerm": "내성적인",
			"HighDescription": "귀하는 쉽게 친구를 사귀고 다른 사람들과 함께 있는 것을 편안하게 느낍니다",
			"HighTerm": "외향적인",
			"LowDescription": "귀하는 개인적인 성향의 사람이고 많은 사람들을 마음속에 들여 보내지 않습니다",
			"Big5": "big5_extraversion"
		},
		"facet_modesty": {
			"LowTerm": "자랑스러워하는",
			"HighDescription": "귀하는 집중의 중심에 있는 것이 불편합니다",
			"HighTerm": "보통의",
			"LowDescription": "귀하는 자부심이 대단하고, 귀하의 자아에 만족합니다",
			"Big5": "big5_agreeableness"
		},
		"facet_activity_level": {
			"LowTerm": "느긋한",
			"HighDescription": "귀하는 많은 활동과 함께 빠르게 진행되고, 바쁜 일정을 즐깁니다",
			"HighTerm": "활동적인",
			"LowDescription": "귀하는 인생의 여유로운 속도에 감사하게 생각합니다",
			"Big5": "big5_extraversion"
		},
		"facet_cautiousness": {
			"LowTerm": "대담한",
			"HighDescription": "귀하는 의사결정을 내리기 전에 면밀히 생각합니다",
			"HighTerm": "계획적인",
			"LowDescription": "귀하는 결정을 내리는 데 심사숙고하는 시간을 소비하는 것보다 차라리 바로 행동을 취하는 편입니다",
			"Big5": "big5_conscientiousness"
		},
		"facet_dutifulness": {
			"LowTerm": "근심걱정없는",
			"HighDescription": "귀하는 심지어 불편할 때라도, 심하게 규칙과 의무를 지킵니다",
			"HighTerm": "순종적인",
			"LowDescription": "귀하는 규칙과 의무를 무시하고 귀하가 원하는 것을 합니다",
			"Big5": "big5_conscientiousness"
		},
		"facet_artistic_interests": {
			"LowTerm": "예술에 무관심한",
			"HighDescription": "귀하는 아름다움을 즐기고 창조적인 경험을 찾아냅니다",
			"HighTerm": "예술에 감탄하는",
			"LowDescription": "귀하는 설문 조사에 참여한 대부분의 사람들보다 예술적이거나 창조적인 활동에 덜 관심이 있습니다",
			"Big5": "big5_openness"
		},
		"facet_immoderation": {
			"LowTerm": "Self-세심히 통제된",
			"HighDescription": "귀하는 귀하의 열망을 강력하게 느끼고 그것들에 의해 쉽게 유혹됩니다",
			"HighTerm": "쾌락주의의",
			"LowDescription": "귀하는 특히 강렬하지 않은 당신의 열망을 통제 할 수 있습니다",
			"Big5": "big5_neuroticism"
		},
		"facet_emotionality": {
			"LowTerm": "감정에 좌우되지 않는",
			"HighDescription": "귀하는 귀하의 감정과 그것을 표현하는 법을 알고 있습니다",
			"HighTerm": "감정적으로 의식하는",
			"LowDescription": "귀하는 자주 귀하의 감정을 생각하거나 공개적으로 표현하지 않습니다",
			"Big5": "big5_openness"
		},
		"facet_adventurousness": {
			"LowTerm": "일관된",
			"HighDescription": "귀하는 새로운 것을 경험하고 싶어합니다",
			"HighTerm": "모험심이 강한",
			"LowDescription": "귀하는 익숙한 루틴을 즐기고, 그것으로 부터 이탈하지 않는 것을 선호합니다",
			"Big5": "big5_openness"
		},
		"facet_anger": {
			"LowTerm": "온순한 기질인",
			"HighDescription": "귀하는 과격한 기질이 있는데, 특히 귀하의 뜻대로 되지 않을 때 그렇습니다",
			"HighTerm": "불같은",
			"LowDescription": "귀하는 화가 나는데 많은 시간이 필요합니다",
			"Big5": "big5_neuroticism"
		},
		"facet_excitement_seeking": {
			"LowTerm": "침착함을 추구하는",
			"HighDescription": "귀하는 많은 액션이 없을 때 지루함을 느끼고 위험을 감수하는 것에 흥분합니다",
			"HighTerm": "흥분을 추구하는",
			"LowDescription": "귀하는 조용하고 안정적이며 안전한 활동을 선호합니다",
			"Big5": "big5_extraversion"
		},
		"facet_cooperation": {
			"LowTerm": "버릇없는",
			"HighDescription": "귀하는 기뻐하는 감정이 쉽게 나타나며 대립을 피하려기 위해 노력합니다",
			"HighTerm": "잘 협조하는",
			"LowDescription": "귀하는 자기모순적인 다른 사람들로부터 피하지 않습니다",
			"Big5": "big5_agreeableness"
		}
	},
	"needs": {
		"need_practicality": [
			"효율성",
			"실현가능성",
			"높은가치",
			"편의성"
		],
		"need_curiosity": [
			"발견",
			"숙달",
			"지식습득"
		],
		"need_stability": [
			"안정성",
			"진위",
			"신뢰성"
		],
		"need_self_expression": [
			"자기표현",
			"개인적인 권한",
			"개인적인 강점"
		],
		"need_structure": [
			"조직",
			"정직함",
			"명확성",
			"신뢰할 수 있음"
		],
		"need_challenge": [
			"명성",
			"경쟁",
			"영광"
		],
		"need_liberty": [
			"현대성",
			"가능성 확장",
			"탈출",
			"자발적임",
			"참신함"
		],
		"need_harmony": [
			"행복",
			"정중함",
			"공손함"
		],
		"need_love": [
			"소속관계",
			"친밀감"
		],
		"need_excitement": [
			"흥청대며놀기",
			"예측",
			"유쾌한 기분"
		],
		"need_ideal": [
			"교양",
			"정신성",
			"우월함",
			"이행"
		],
		"need_closeness": [
			"소속성",
			"향수",
			"친밀함"
		]
	},
	"phrases": {
      "Experiences that give a sense of %s hold some appeal to you": "%을(를) 느낀 경험은 귀하에게 매력적으로 느껴집니다",
      "You consider %s to guide a large part of what you do": "귀하가 하는 일의 많은 부분에 %s를(을) 고려합니다",
      "You value both %s a bit": "귀하는 %s 또한 어느정도 가치있게 여깁니다",
      "And %s": "그리고 %s 입니다(합니다)",
      "And you are %s": "또한 귀하는 %s 입니다(합니다)",
      "a bit %s": "약간 %s",
      "can be perceived as %s": "%s (으)로 인식될 수 있습니다",
      "You are relatively unconcerned with both %s and %s": "귀하는 %s 와(과) %s 을(를) 비교적 신경쓰지않는 편입니다",
      "You are %s and %s": "귀하는 %s 이고(하고) %s 입니다(합니다)",
      "You value both %s and %s a bit": "귀하는 %s 와(과) %s 모두를 어느정도 가치있게 여깁니다",
      "You don't find %s to be particularly motivating for you": "귀하는 %s 에서 특별한 동기부여를 받지 못하는 편입니다",
      "You are %s": "귀하는 %s 입니다(합니다)",
      "You are %s, %s and %s": "귀하는 %s, %s 그리고  %s 입니다(합니다)",
      "Your choices are driven by a desire for %s": "귀하의 선택들은 %s에 대한 열망에 의해 좌우됩니다",
      "You are motivated to seek out experiences that provide a strong feeling of %s": "귀하는 %s에 대한 강한 느낌을 주는 경험을 겪고 싶어 합니다",
      "Experiences that make you feel high %s are generally unappealing to you": "%s 을(를) 많이 느끼는 경험들은 귀하가 그다지 매력적으로 느끼지 않습니다",
      "You don't find either %s or %s to be particularly motivating for you": "%s 이나 %s 모두 귀하를 특별히 움직이게 하는 동기는 되지 못합니다",
      "You are relatively unconcerned with %s": "%s에 대해 귀하는 상대적으로 신경쓰지 않는 편입니다",
      "somewhat %s": "다소 %s",
      "You value %s a bit more": "귀하는 %s에 조금 더 가치를 둡니다",
      "You consider both %s and %s to guide a large part of what you do": "귀하는 무언가 하시는 일의 많은 부분에 %s 와(과) %s 모두를 고려합니다"
  },
	"traits": {
		"big5_conscientiousness_plus_big5_agreeableness_minus": [
      {
				"perceived_negatively": true,
				"word": "단호한"
			},
			{
				"perceived_negatively": false,
				"word": "엄격한"
			},
			{
				"perceived_negatively": false,
				"word": "융통성 없는"
			}
		],
		"big5_neuroticism_plus_big5_extraversion_minus": [
      {
				"perceived_negatively": false,
				"word": "신중한"
			},
			{
				"perceived_negatively": true,
				"word": "조바심치는"
			},
			{
				"perceived_negatively": true,
				"word": "자신이없는"
			},
			{
				"perceived_negatively": true,
				"word": "비관적인"
			},
			{
				"perceived_negatively": false,
				"word": "비밀스러운"
			},
			{
				"perceived_negatively": true,
				"word": "걱정하는"
			},
			{
				"perceived_negatively": true,
				"word": "부정론적인"
			},
			{
				"perceived_negatively": false,
				"word": "자기비판적인"
			}
		],
		"big5_agreeableness_minus_big5_neuroticism_minus": [{
				"perceived_negatively": true,
				"word": "둔감한"
			},
			{
				"perceived_negatively": true,
				"word": "애정이없는"
			},
			{
				"perceived_negatively": true,
				"word": "열정없는"
			},
			{
				"perceived_negatively": true,
				"word": "감정을 드러내지 않는"
			}
		],
		"big5_agreeableness_plus_big5_neuroticism_plus": [{
				"perceived_negatively": false,
				"word": "감상적인"
			},
			{
				"perceived_negatively": false,
				"word": "다정한"
			},
			{
				"perceived_negatively": false,
				"word": "예민한"
			},
			{
				"perceived_negatively": false,
				"word": "부드러운"
			},
			{
				"perceived_negatively": false,
				"word": "열정을느끼는"
			},
			{
				"perceived_negatively": false,
				"word": "로맨틱한"
			}
		],
		"big5_conscientiousness_minus_big5_neuroticism_minus": [{
				"perceived_negatively": false,
				"word": "형식에 얽매이지 않는"
			},
			{
				"perceived_negatively": false,
				"word": "절제하는"
			}
		],
		"big5_agreeableness_plus_big5_conscientiousness_minus": [{
				"perceived_negatively": false,
				"word": "잘난체 하지 않는"
			},
			{
				"perceived_negatively": false,
				"word": "본인을 내세우지 않는"
			}
		],
		"big5_conscientiousness_plus_big5_agreeableness_plus": [{
				"perceived_negatively": false,
				"word": "믿을 수 있는"
			},
			{
				"perceived_negatively": false,
				"word": "책임지고 있는"
			},
			{
				"perceived_negatively": false,
				"word": "신뢰할 수 있는"
			},
			{
				"perceived_negatively": false,
				"word": "예절이 바른"
			},
			{
				"perceived_negatively": false,
				"word": "사려깊은"
			}
		],
		"big5_agreeableness_minus_big5_extraversion_plus": [{
				"perceived_negatively": true,
				"word": "완고한"
			},
			{
				"perceived_negatively": true,
				"word": "퉁명스러운"
			},
			{
				"perceived_negatively": true,
				"word": "대충의"
			},
			{
				"perceived_negatively": true,
				"word": "금방이라도 싸울듯이"
			},
			{
				"perceived_negatively": true,
				"word": "개략적인"
			},
			{
				"perceived_negatively": false,
				"word": "교활한"
			},
			{
				"perceived_negatively": true,
				"word": "조종하는"
			},
			{
				"perceived_negatively": true,
				"word": "거친"
			},
			{
				"perceived_negatively": true,
				"word": "정직하지 못한"
			}
		],
		"big5_neuroticism_plus_big5_openness_minus": [{
				"perceived_negatively": false,
				"word": "쉽게 난처해지는"
			},
			{
				"perceived_negatively": false,
				"word": "쉽게 짜증내는"
			},
			{
				"perceived_negatively": false,
				"word": "걱정되는"
			}
		],
		"big5_openness_minus_big5_agreeableness_plus": [{
				"perceived_negatively": true,
				"word": "단순한"
			},
			{
				"perceived_negatively": true,
				"word": "의존하는"
			}
		],
		"big5_neuroticism_minus_big5_openness_minus": [{
				"perceived_negatively": false,
				"word": "쉽게 동요하지 않는"
			},
			{
				"perceived_negatively": true,
				"word": "둔감한"
			}
		],
		"big5_agreeableness_minus_big5_conscientiousness_minus": [{
				"perceived_negatively": true,
				"word": "사려깊지못한"
			},
			{
				"perceived_negatively": true,
				"word": "불공손한"
			},
			{
				"perceived_negatively": true,
				"word": "의심많은"
			},
			{
				"perceived_negatively": true,
				"word": "비협조적인"
			},
			{
				"perceived_negatively": true,
				"word": "무심한"
			}
		],
		"big5_extraversion_plus_big5_conscientiousness_plus": [{
				"perceived_negatively": false,
				"word": "활동적인"
			},
			{
				"perceived_negatively": false,
				"word": "경쟁력있는"
			},
			{
				"perceived_negatively": false,
				"word": "끈질긴"
			},
			{
				"perceived_negatively": false,
				"word": "야심찬"
			},
			{
				"perceived_negatively": false,
				"word": "목적의식이 있는"
			}
		],
		"big5_agreeableness_minus_big5_conscientiousness_plus": [{
				"perceived_negatively": false,
				"word": "엄격한"
			},
			{
				"perceived_negatively": false,
				"word": "융통성없는"
			},
			{
				"perceived_negatively": true,
				"word": "단호한"
			}
		],
		"big5_neuroticism_minus_big5_agreeableness_plus": [{
				"perceived_negatively": false,
				"word": "참을성있는"
			},
			{
				"perceived_negatively": false,
				"word": "여유있는"
			},
			{
				"perceived_negatively": false,
				"word": "힘들지 않은"
			},
			{
				"perceived_negatively": false,
				"word": "현실적인"
			},
			{
				"perceived_negatively": false,
				"word": "낙관적인"
			},
			{
				"perceived_negatively": false,
				"word": "명청한"
			},
			{
				"perceived_negatively": false,
				"word": "무비판적인"

			},
			{
				"perceived_negatively": false,
				"word": "잘난체 하지 않는"
			}
		],
		"big5_openness_minus_big5_extraversion_minus": [{
				"perceived_negatively": false,
				"word": "예측할 수 있는"
			},
			{
				"perceived_negatively": true,
				"word": "상상력이 부족한"
			},
			{
				"perceived_negatively": false,
				"word": "어두침침한"
			},
			{
				"perceived_negatively": true,
				"word": "무관심한"
			},
			{
				"perceived_negatively": true,
				"word": "모험심이 없는"
			}
		],
		"big5_extraversion_plus_big5_agreeableness_minus": [{
				"perceived_negatively": false,
				"word": "자기의견을 고집하는"
			},
			{
				"perceived_negatively": true,
				"word": "단호한"
			},
			{
				"perceived_negatively": true,
				"word": "지배하려드는"
			},
			{
				"perceived_negatively": true,
				"word": "자랑하는"
			},
			{
				"perceived_negatively": true,
				"word": "우두머리행세를 하는"
			},
			{
				"perceived_negatively": false,
				"word": "우세한"
			},
			{
				"perceived_negatively": false,
				"word": "교활한"
			}
		],
		"big5_neuroticism_plus_big5_agreeableness_minus": [{
				"perceived_negatively": true,
				"word": "괴팍한"
			},
			{
				"perceived_negatively": true,
				"word": "짜증내는"
			},
			{
				"perceived_negatively": true,
				"word": "다투기 좋아하는"
			},
			{
				"perceived_negatively": true,
				"word": "참을성이 없는"
			},
			{
				"perceived_negatively": true,
				"word": "성격이 나쁜"
			},
			{
				"perceived_negatively": true,
				"word": "괴팍한"
			},
			{
				"perceived_negatively": true,
				"word": "짜증내는"
			}
		],
		"big5_neuroticism_plus_big5_extraversion_plus": [{
				"perceived_negatively": false,
				"word": "흥분을 잘하는"
			},
			{
				"perceived_negatively": true,
				"word": "장황한"
			},
			{
				"perceived_negatively": false,
				"word": "추파를던지는"
			},
			{
				"perceived_negatively": true,
				"word": "격정적인"
			},
			{
				"perceived_negatively": false,
				"word": "낭비벽이있는"
			},
			{
				"perceived_negatively": true,
				"word": "변덕스러운"
			}
		],
		"big5_agreeableness_minus_big5_openness_minus": [{
				"perceived_negatively": true,
				"word": "거친"
			},
			{
				"perceived_negatively": true,
				"word": "요령없는"
			},
			{
				"perceived_negatively": true,
				"word": "퉁명스러운"
			},
			{
				"perceived_negatively": true,
				"word": "속이좁은"
			},
			{
				"perceived_negatively": true,
				"word": "냉담한"
			},
			{
				"perceived_negatively": true,
				"word": "무자비한"
			},
			{
				"perceived_negatively": true,
				"word": "몰인정한"
			},
			{
				"perceived_negatively": true,
				"word": "앙심을 품은"
			}
		],
		"big5_conscientiousness_minus_big5_agreeableness_plus": [{
				"perceived_negatively": false,
				"word": "잘난체 하지 않는"
			},
			{
				"perceived_negatively": false,
				"word": "자기를 내세우지 않는"
			}
		],
		"big5_agreeableness_plus_big5_openness_plus": [{
				"perceived_negatively": false,
				"word": "상냥한"
			},
			{
				"perceived_negatively": false,
				"word": "요령있는"
			},
			{
				"perceived_negatively": false,
				"word": "외교적인"
			},
			{
				"perceived_negatively": false,
				"word": "깊은"
			},
			{
				"perceived_negatively": false,
				"word": "이상주의적인"
			}
		],
		"big5_agreeableness_minus_big5_neuroticism_plus": [{
				"perceived_negatively": true,
				"word": "비판적인"
			},
			{
				"perceived_negatively": true,
				"word": "이기적인"
			},
			{
				"perceived_negatively": true,
				"word": "성질이나쁜"
			},
			{
				"perceived_negatively": true,
				"word": "적대적인"
			},
			{
				"perceived_negatively": true,
				"word": "성격이나쁜"
			},
			{
				"perceived_negatively": true,
				"word": "억울해하는"
			},
			{
				"perceived_negatively": true,
				"word": "유쾌하지못한"
			},
			{
				"perceived_negatively": true,
				"word": "부담이 큰"
			}
		],
		"big5_openness_minus_big5_neuroticism_minus": [{
				"perceived_negatively": false,
				"word": "쉽게동요하지 않는"
			},
			{
				"perceived_negatively": true,
				"word": "둔감한"
			}
		],
		"big5_conscientiousness_plus_big5_openness_plus": [{
				"perceived_negatively": false,
				"word": "세련된"
			},
			{
				"perceived_negatively": false,
				"word": "완벽주의자적인"
			},
			{
				"perceived_negatively": false,
				"word": "근면한"
			},
			{
				"perceived_negatively": false,
				"word": "위엄있는"
			},
			{
				"perceived_negatively": false,
				"word": "정제된"
			},
			{
				"perceived_negatively": false,
				"word": "교양있는"
			},
			{
				"perceived_negatively": false,
				"word": "선견지명이있는"
			}
		],
		"big5_agreeableness_minus_big5_openness_plus": [{
				"perceived_negatively": false,
				"word": "상황판단이 빠른"
			},
			{
				"perceived_negatively": false,
				"word": "괴짜인"
			},
			{
				"perceived_negatively": false,
				"word": "개인주의적인"
			}
		],
		"big5_neuroticism_plus_big5_openness_plus": [{
				"perceived_negatively": false,
				"word": "흥분을잘하는"
			},
			{
				"perceived_negatively": false,
				"word": "열정을느끼는"
			},
			{
				"perceived_negatively": false,
				"word": "감각적인"
			}
		],
		"big5_neuroticism_minus_big5_openness_plus": [{
				"perceived_negatively": false,
				"word": "진심어린"
			},
			{
				"perceived_negatively": false,
				"word": "다재다능한"
			},
			{
				"perceived_negatively": false,
				"word": "창의적인"
			},
			{
				"perceived_negatively": false,
				"word": "지적인"
			},
			{
				"perceived_negatively": false,
				"word": "통찰력있는"
			}
		],
		"big5_openness_minus_big5_conscientiousness_plus": [{
				"perceived_negatively": false,
				"word": "관습적인"
			},
			{
				"perceived_negatively": false,
				"word": "전통의"
			}
		],
		"big5_extraversion_plus_big5_openness_minus": [{
				"perceived_negatively": true,
				"word": "장황한"
			},
			{
				"perceived_negatively": true,
				"word": "부도덕한"
			},
			{
				"perceived_negatively": true,
				"word": "거만한"
			}
		],
		"big5_extraversion_minus_big5_openness_plus": [{
				"perceived_negatively": false,
				"word": "내부지향적인"
			},
			{
				"perceived_negatively": false,
				"word": "자기성찰적인"
			},
			{
				"perceived_negatively": false,
				"word": "깊은생각에 잠긴"
			},
			{
				"perceived_negatively": false,
				"word": "숙고하고 있는"
			},
			{
				"perceived_negatively": false,
				"word": "자기반성적인"
			}
		],
		"big5_openness_minus_big5_conscientiousness_minus": [{
				"perceived_negatively": true,
				"word": "선견지명이 없는"
			},
			{
				"perceived_negatively": false,
				"word": "무모한"
			},
			{
				"perceived_negatively": true,
				"word": "비논리적인"
			},
			{
				"perceived_negatively": true,
				"word": "미숙한"
			},
			{
				"perceived_negatively": true,
				"word": "무계획적인"
			},
			{
				"perceived_negatively": false,
				"word": "해이한"
			},
			{
				"perceived_negatively": true,
				"word": "경솔한"
			}
		],
		"big5_extraversion_minus_big5_neuroticism_minus": [{
				"perceived_negatively": false,
				"word": "평온한"
			},
			{
				"perceived_negatively": false,
				"word": "차분한"
			},
			{
				"perceived_negatively": false,
				"word": "얌전한"
			},
			{
				"perceived_negatively": false,
				"word": "공정한"
			},
			{
				"perceived_negatively": false,
				"word": "잘난체하지 않는"
			},
			{
				"perceived_negatively": false,
				"word": "잠자코 동의하는"
			}
		],
		"big5_conscientiousness_plus_big5_openness_minus": [{
				"perceived_negatively": false,
				"word": "전통의"
			},
			{
				"perceived_negatively": false,
				"word": "관습적인"
			}
		],
		"big5_openness_plus_big5_neuroticism_minus": [{
				"perceived_negatively": false,
				"word": "창의적인"
			},
			{
				"perceived_negatively": false,
				"word": "지적인"
			},
			{
				"perceived_negatively": false,
				"word": "통찰력있는"
			},
			{
				"perceived_negatively": false,
				"word": "다재다능한"
			},
			{
				"perceived_negatively": false,
				"word": "독창적인"
			}
		],
		"big5_agreeableness_plus_big5_extraversion_minus": [{
				"perceived_negatively": false,
				"word": "마음이 부드러운"
			},
			{
				"perceived_negatively": false,
				"word": "기분좋은"
			},
			{
				"perceived_negatively": false,
				"word": "도와주는"
			},
			{
				"perceived_negatively": false,
				"word": "겸손한"
			},
			{
				"perceived_negatively": true,
				"word": "관대한"
			}
		],
		"big5_extraversion_minus_big5_conscientiousness_minus": [{
				"perceived_negatively": true,
				"word": "간접적인"
			},
			{
				"perceived_negatively": true,
				"word": "기가허한"
			},
			{
				"perceived_negatively": true,
				"word": "느릿느릿 움직이는"
			},
			{
				"perceived_negatively": true,
				"word": "지속성이 없는"
			},
			{
				"perceived_negatively": true,
				"word": "희미한"
			}
		],
		"big5_openness_plus_big5_conscientiousness_plus": [{
				"perceived_negatively": false,
				"word": "분석적인"
			},
			{
				"perceived_negatively": false,
				"word": "통찰력있는"
			},
			{
				"perceived_negatively": false,
				"word": "유용한 정보를 주는"
			},
			{
				"perceived_negatively": false,
				"word": "분명히 표현하는"
			},
			{
				"perceived_negatively": false,
				"word": "위엄있는"
			},
			{
				"perceived_negatively": false,
				"word": "교양있는"
			}
		],
		"big5_openness_minus_big5_extraversion_plus": [{
				"perceived_negatively": true,
				"word": "장황한"
			},
			{
				"perceived_negatively": true,
				"word": "부도덕한"
			},
			{
				"perceived_negatively": true,
				"word": "거만한"
			}
		],
		"big5_conscientiousness_minus_big5_agreeableness_minus": [{
				"perceived_negatively": true,
				"word": "무분별한"
			},
			{
				"perceived_negatively": true,
				"word": "비협조적인"
			},
			{
				"perceived_negatively": true,
				"word": "믿을 수 없는"
			},
			{
				"perceived_negatively": true,
				"word": "의심많은"
			},
			{
				"perceived_negatively": true,
				"word": "무심한"
			}
		],
		"big5_agreeableness_plus_big5_neuroticism_minus": [{
				"perceived_negatively": false,
				"word": "관대한"
			},
			{
				"perceived_negatively": false,
				"word": "즐거운"
			},
			{
				"perceived_negatively": false,
				"word": "아량있는"
			},
			{
				"perceived_negatively": false,
				"word": "평화로운"
			},
			{
				"perceived_negatively": false,
				"word": "융통성있는"
			},
			{
				"perceived_negatively": false,
				"word": "느긋한"
			},
			{
				"perceived_negatively": false,
				"word": "공평한"
			},
			{
				"perceived_negatively": false,
				"word": "자선을 베푸는"
			},
			{
				"perceived_negatively": false,
				"word": "믿음직하게 여기는"
			}
		],
		"big5_openness_plus_big5_agreeableness_minus": [{
				"perceived_negatively": false,
				"word": "상황판단이 빠른"
			},
			{
				"perceived_negatively": false,
				"word": "괴짜인"
			},
			{
				"perceived_negatively": false,
				"word": "개인주의적인"
			}
		],
		"big5_conscientiousness_plus_big5_extraversion_plus": [{
				"perceived_negatively": false,
				"word": "야심찬"
			},
			{
				"perceived_negatively": false,
				"word": "기민한"
			},
			{
				"perceived_negatively": false,
				"word": "단호한"
			},
			{
				"perceived_negatively": false,
				"word": "목적의식이 있는"
			},
			{
				"perceived_negatively": false,
				"word": "경쟁력있는"
			}
		],
		"big5_openness_plus_big5_agreeableness_plus": [{
				"perceived_negatively": false,
				"word": "이상주의적인"
			},
			{
				"perceived_negatively": false,
				"word": "외교적인"
			},
			{
				"perceived_negatively": false,
				"word": "깊은"
			},
			{
				"perceived_negatively": false,
				"word": "요령있는"
			},
			{
				"perceived_negatively": false,
				"word": "상냥한"
			}
		],
		"big5_conscientiousness_minus_big5_openness_minus": [{
				"perceived_negatively": false,
				"word": "무모한"
			},
			{
				"perceived_negatively": true,
				"word": "비논리적인"
			},
			{
				"perceived_negatively": true,
				"word": "미숙한"
			},
			{
				"perceived_negatively": true,
				"word": "무계획적인"
			},
			{
				"perceived_negatively": false,
				"word": "해이한"
			},
			{
				"perceived_negatively": true,
				"word": "경솔한"
			}
		],
		"big5_conscientiousness_plus_big5_neuroticism_plus": [{
				"perceived_negatively": false,
				"word": "까다로운"
			},
			{
				"perceived_negatively": true,
				"word": "극도로 긴장한"
			}
		],
		"big5_neuroticism_minus_big5_extraversion_plus": [{
				"perceived_negatively": false,
				"word": "남의눈을 신경쓰지않는"
			},
			{
				"perceived_negatively": false,
				"word": "피곤을 모르는"
			},
			{
				"perceived_negatively": false,
				"word": "포기할 줄 모르는"
			}
		],
		"big5_openness_minus_big5_agreeableness_minus": [{
				"perceived_negatively": true,
				"word": "거친"
			},
			{
				"perceived_negatively": true,
				"word": "요령없는"
			},
			{
				"perceived_negatively": true,
				"word": "퉁명스러운"
			},
			{
				"perceived_negatively": true,
				"word": "속이좁은"
			},
			{
				"perceived_negatively": true,
				"word": "냉담한"
			}
		],
		"big5_neuroticism_plus_big5_agreeableness_plus": [{
				"perceived_negatively": false,
				"word": "감정적인"
			},
			{
				"perceived_negatively": true,
				"word": "남을 잘 믿는"
			},
			{
				"perceived_negatively": false,
				"word": "다정한"
			},
			{
				"perceived_negatively": false,
				"word": "예민한"
			},
			{
				"perceived_negatively": false,
				"word": "부드러운"
			}
		],
		"big5_extraversion_minus_big5_agreeableness_plus": [{
				"perceived_negatively": false,
				"word": "비공격적인"
			},
			{
				"perceived_negatively": false,
				"word": "겸손한"
			},
			{
				"perceived_negatively": false,
				"word": "순종적인"
			},
			{
				"perceived_negatively": false,
				"word": "소심한"
			},
			{
				"perceived_negatively": false,
				"word": "순응하는"
			},
			{
				"perceived_negatively": false,
				"word": "소박한"
			}
		],
		"big5_agreeableness_plus_big5_extraversion_plus": [{
				"perceived_negatively": false,
				"word": "열광하는"
			},
			{
				"perceived_negatively": false,
				"word": "행복한"
			},
			{
				"perceived_negatively": false,
				"word": "친밀한"
			},
			{
				"perceived_negatively": false,
				"word": "즐거운"
			},
			{
				"perceived_negatively": false,
				"word": "아주 쾌활한"
			},
			{
				"perceived_negatively": false,
				"word": "유머러스한"
			}
		],
		"big5_openness_plus_big5_extraversion_plus": [{
				"perceived_negatively": false,
				"word": "세속적인"
			},
			{
				"perceived_negatively": false,
				"word": "과장된"
			},
			{
				"perceived_negatively": false,
				"word": "유창한"
			},
			{
				"perceived_negatively": false,
				"word": "탐구심이 많은"
			},
			{
				"perceived_negatively": false,
				"word": "극심한"
			}
		],
		"big5_extraversion_minus_big5_openness_minus": [{
				"perceived_negatively": false,
				"word": "어두침침한"
			},
			{
				"perceived_negatively": true,
				"word": "온순한"
			},
			{
				"perceived_negatively": true,
				"word": "모험심이 없는"
			},
			{
				"perceived_negatively": false,
				"word": "수동적인"
			},
			{
				"perceived_negatively": true,
				"word": "무관심한"
			},
			{
				"perceived_negatively": false,
				"word": "고분고분한"
			}
		],
		"big5_extraversion_minus_big5_conscientiousness_plus": [{
				"perceived_negatively": false,
				"word": "차분한"
			},
			{
				"perceived_negatively": false,
				"word": "심각한"
			},
			{
				"perceived_negatively": false,
				"word": "신중한"
			},
			{
				"perceived_negatively": false,
				"word": "조심스러운"
			},
			{
				"perceived_negatively": false,
				"word": "지조있는"
			}
		],
		"big5_neuroticism_minus_big5_extraversion_minus": [{
				"perceived_negatively": false,
				"word": "잘난체하지 않는"
			},
			{
				"perceived_negatively": true,
				"word": "쉽게 흥분하지 않는"
			},
			{
				"perceived_negatively": false,
				"word": "얌전한"
			},
			{
				"perceived_negatively": false,
				"word": "평온한"
			}
		],
		"big5_extraversion_plus_big5_neuroticism_plus": [{
				"perceived_negatively": false,
				"word": "격정적인"
			},
			{
				"perceived_negatively": true,
				"word": "장황한"
			},
			{
				"perceived_negatively": false,
				"word": "낭비하는"
			},
			{
				"perceived_negatively": true,
				"word": "변덕스러운"
			},
			{
				"perceived_negatively": false,
				"word": "추파를 던지는"
			}
		],
		"big5_extraversion_plus_big5_openness_plus": [{
				"perceived_negatively": false,
				"word": "표현력이 있는"
			},
			{
				"perceived_negatively": false,
				"word": "솔직한"
			},
			{
				"perceived_negatively": false,
				"word": "극적인"
			},
			{
				"perceived_negatively": false,
				"word": "자발적인"
			},
			{
				"perceived_negatively": false,
				"word": "재치있는"
			},
			{
				"perceived_negatively": false,
				"word": "기회주의적인"
			},
			{
				"perceived_negatively": false,
				"word": "독립적인"
			}
		],
		"big5_conscientiousness_minus_big5_openness_plus": [{
				"perceived_negatively": false,
				"word": "관습에 얽매이지 않는"
			},
			{
				"perceived_negatively": false,
				"word": "변덕스러운"
			}
		],
		"big5_extraversion_minus_big5_agreeableness_minus": [{
				"perceived_negatively": false,
				"word": "의심많은"
			},
			{
				"perceived_negatively": false,
				"word": "타인을 조심하는"
			},
			{
				"perceived_negatively": true,
				"word": "은둔적인"
			},
			{
				"perceived_negatively": true,
				"word": "말을 잘 안하는"
			},
			{
				"perceived_negatively": true,
				"word": "비사교적인"
			},
			{
				"perceived_negatively": true,
				"word": "침울한"
			},
			{
				"perceived_negatively": true,
				"word": "거리를 두는"
			},
			{
				"perceived_negatively": false,
				"word": "냉담한"
			}
		],
		"big5_conscientiousness_minus_big5_neuroticism_plus": [{
				"perceived_negatively": true,
				"word": "침착하지 못한"
			},
			{
				"perceived_negatively": true,
				"word": "모순되는"
			},
			{
				"perceived_negatively": true,
				"word": "불규칙한"
			},
			{
				"perceived_negatively": true,
				"word": "잘 잊어버리는"
			},
			{
				"perceived_negatively": true,
				"word": "충동적인"
			},
			{
				"perceived_negatively": true,
				"word": "경솔한"
			}
		],
		"big5_conscientiousness_plus_big5_neuroticism_minus": [{
				"perceived_negatively": false,
				"word": "철두철미한"
			},
			{
				"perceived_negatively": false,
				"word": "꾸준한"
			},
			{
				"perceived_negatively": false,
				"word": "한결같은"
			},
			{
				"perceived_negatively": false,
				"word": "자기 수양이된"
			},
			{
				"perceived_negatively": false,
				"word": "논리적인"
			},
			{
				"perceived_negatively": false,
				"word": "결단력 있는"
			},
			{
				"perceived_negatively": false,
				"word": "세심히 통제된"
			},
			{
				"perceived_negatively": false,
				"word": "간결한"
			}
		],
		"big5_openness_minus_big5_neuroticism_plus": [{
				"perceived_negatively": false,
				"word": "쉽게 난처해지는"
			},
			{
				"perceived_negatively": false,
				"word": "쉽게 짜증내는"
			},
			{
				"perceived_negatively": false,
				"word": "걱정되는"
			}
		],
		"big5_agreeableness_plus_big5_openness_minus": [{
				"perceived_negatively": true,
				"word": "의존하는"
			},
			{
				"perceived_negatively": true,
				"word": "단순한"
			}
		],
		"big5_conscientiousness_plus_big5_extraversion_minus": [{
				"perceived_negatively": false,
				"word": "조심스러운"
			},
			{
				"perceived_negatively": false,
				"word": "자신감있는"
			},
			{
				"perceived_negatively": false,
				"word": "시간을 지키는"
			},
			{
				"perceived_negatively": false,
				"word": "격식을 차린"
			},
			{
				"perceived_negatively": false,
				"word": "절약하는"
			},
			{
				"perceived_negatively": false,
				"word": "지조있는"
			}
		],
		"big5_agreeableness_plus_big5_conscientiousness_plus": [{
				"perceived_negatively": false,
				"word": "도움이 되는"
			},
			{
				"perceived_negatively": false,
				"word": "협력하는"
			},
			{
				"perceived_negatively": false,
				"word": "사려깊은"
			},
			{
				"perceived_negatively": false,
				"word": "존경심을 보이는"
			},
			{
				"perceived_negatively": false,
				"word": "공손한"
			},
			{
				"perceived_negatively": false,
				"word": "타당한"
			},
			{
				"perceived_negatively": false,
				"word": "courteous"
			},
			{
				"perceived_negatively": false,
				"word": "배려심 있는"
			},
			{
				"perceived_negatively": false,
				"word": "충성스러운"
			},
			{
				"perceived_negatively": false,
				"word": "도덕적인"
			}
		],
		"big5_neuroticism_minus_big5_conscientiousness_plus": [{
				"perceived_negatively": false,
				"word": "합리적인"
			},
			{
				"perceived_negatively": false,
				"word": "객관적인"
			},
			{
				"perceived_negatively": false,
				"word": "꾸준한"
			},
			{
				"perceived_negatively": false,
				"word": "논리적인"
			},
			{
				"perceived_negatively": false,
				"word": "결단력 있는"
			},
			{
				"perceived_negatively": false,
				"word": "poised"
			},
			{
				"perceived_negatively": false,
				"word": "간결한"
			},
			{
				"perceived_negatively": false,
				"word": "철두철미한"
			},
			{
				"perceived_negatively": false,
				"word": "실속있는"
			},
			{
				"perceived_negatively": false,
				"word": "자기 수양이된"
			}
		],
		"big5_extraversion_plus_big5_neuroticism_minus": [{
				"perceived_negatively": false,
				"word": "자신감있는"
			},
			{
				"perceived_negatively": false,
				"word": "용감한"
			},
			{
				"perceived_negatively": false,
				"word": "자신감 있는"
			},
			{
				"perceived_negatively": false,
				"word": "거리낌이 없는"
			},
			{
				"perceived_negatively": false,
				"word": "용감한"
			},
			{
				"perceived_negatively": false,
				"word": "용기있는"
			},
			{
				"perceived_negatively": false,
				"word": "자기만족에 빠진"
			},
			{
				"perceived_negatively": false,
				"word": "활발한"
			},
			{
				"perceived_negatively": false,
				"word": "확고한"
			}
		],
		"big5_agreeableness_minus_big5_extraversion_minus": [{
				"perceived_negatively": true,
				"word": "냉소적인"
			},
			{
				"perceived_negatively": true,
				"word": "타인을 조심하는"
			},
			{
				"perceived_negatively": true,
				"word": "은둔적인"
			},
			{
				"perceived_negatively": true,
				"word": "거리를 두는"
			},
			{
				"perceived_negatively": true,
				"word": "인간미없는"
			},
			{
				"perceived_negatively": true,
				"word": "침울한"
			}
		],
		"big5_neuroticism_minus_big5_conscientiousness_minus": [{
				"perceived_negatively": false,
				"word": "형식에 얽매이지 않는"
			},
			{
				"perceived_negatively": false,
				"word": "절제하는"
			}
		],
		"big5_neuroticism_minus_big5_agreeableness_minus": [{
				"perceived_negatively": true,
				"word": "감정을 드러내지않는"
			},
			{
				"perceived_negatively": true,
				"word": "둔감한"
			},
			{
				"perceived_negatively": true,
				"word": "애정이 없는"
			},
			{
				"perceived_negatively": true,
				"word": "열정없는"
			}
		],
		"big5_extraversion_minus_big5_neuroticism_plus": [{
				"perceived_negatively": false,
				"word": "조심스러운"
			},
			{
				"perceived_negatively": false,
				"word": "비관적인"
			},
			{
				"perceived_negatively": false,
				"word": "비밀스러운"
			},
			{
				"perceived_negatively": true,
				"word": "겁이많은"
			},
			{
				"perceived_negatively": false,
				"word": "비밀스러운"
			}
		],
		"big5_openness_plus_big5_extraversion_minus": [{
				"perceived_negatively": false,
				"word": "자기성찰적인"
			},
			{
				"perceived_negatively": false,
				"word": "깊은생각에 잠긴"
			},
			{
				"perceived_negatively": false,
				"word": "숙고하고 있는"
			},
			{
				"perceived_negatively": false,
				"word": "자기반성적인"
			},
			{
				"perceived_negatively": false,
				"word": "내부지향적인"
			}
		],
		"big5_extraversion_plus_big5_conscientiousness_minus": [{
				"perceived_negatively": false,
				"word": "활기가 넘치는"
			},
			{
				"perceived_negatively": false,
				"word": "짓궃은"
			},
			{
				"perceived_negatively": false,
				"word": "과시벽이 있는"
			},
			{
				"perceived_negatively": false,
				"word": "남과 어울리기 좋아하는"
			},
			{
				"perceived_negatively": false,
				"word": "숨기지 않는"
			}
		],
		"big5_conscientiousness_minus_big5_extraversion_plus": [{
				"perceived_negatively": true,
				"word": "제멋대로 구는"
			},
			{
				"perceived_negatively": false,
				"word": "활기가 넘치는"
			},
			{
				"perceived_negatively": true,
				"word": "무모한"
			},
			{
				"perceived_negatively": true,
				"word": "명랑쾌활한"
			},
			{
				"perceived_negatively": false,
				"word": "숨기지 않는"
			}
		],
		"big5_openness_plus_big5_neuroticism_plus": [{
				"perceived_negatively": false,
				"word": "열정을느끼는"
			},
			{
				"perceived_negatively": false,
				"word": "흥분을잘하는"
			},
			{
				"perceived_negatively": false,
				"word": "감각적인"
			}
		],
		"big5_extraversion_plus_big5_agreeableness_plus": [{
				"perceived_negatively": false,
				"word": "사회적인"
			},
			{
				"perceived_negatively": false,
				"word": "활동적인"
			},
			{
				"perceived_negatively": false,
				"word": "열광적인"
			},
			{
				"perceived_negatively": false,
				"word": "말을 잘하는"
			},
			{
				"perceived_negatively": false,
				"word": "활기찬"
			},
			{
				"perceived_negatively": false,
				"word": "활발한"
			},
			{
				"perceived_negatively": false,
				"word": "대단히 매력적인"
			},
			{
				"perceived_negatively": false,
				"word": "열심인"
			}
		],
		"big5_neuroticism_plus_big5_conscientiousness_minus": [{
				"perceived_negatively": true,
				"word": "강박적인"
			},
			{
				"perceived_negatively": true,
				"word": "참견하기 좋아하는"
			},
			{
				"perceived_negatively": true,
				"word": "제멋대로하는"
			},
			{
				"perceived_negatively": true,
				"word": "잘 잊어버리는"
			},
			{
				"perceived_negatively": true,
				"word": "충동적인"
			}
		],
		"big5_openness_plus_big5_conscientiousness_minus": [{
				"perceived_negatively": false,
				"word": "관습에 얽매이지 않는"
			},
			{
				"perceived_negatively": false,
				"word": "변덕스러운"
			}
		],
		"big5_conscientiousness_minus_big5_extraversion_minus": [{
				"perceived_negatively": true,
				"word": "우유부단한"
			},
			{
				"perceived_negatively": true,
				"word": "목적을 잃은"
			},
			{
				"perceived_negatively": false,
				"word": "미온적인"
			},
			{
				"perceived_negatively": false,
				"word": "애매한"
			},
			{
				"perceived_negatively": true,
				"word": "야망이없는"
			}
		],
		"big5_neuroticism_plus_big5_conscientiousness_plus": [{
				"perceived_negatively": false,
				"word": "까다로운"
			},
			{
				"perceived_negatively": true,
				"word": "극도로 긴장한"
			}
		]
	},
	"values": {
		"value_self_transcendence": [
      {
				"Term": "타인을 돕는 것",
				"LowDescription": "귀하는 사람들이 간섭없이 자신의 일을 할 수 있다고 생각합니다",
				"HighDescription": "귀하는 귀하의 주변 사람들을 돌보는 것이 중요하다고 생각합니다"
			},
			{
				"Term": "공정함",
				"LowDescription": "귀하는 사람들이 자신의 기회를 만든다고 믿습니다",
				"HighDescription": "귀하는 모든 사람들을 위한 사회 정의와 평등을 믿습니다"
			},
			{
				"Term": "사회정의",
				"LowDescription": "귀하는 사람들이 자신의 기회를 만든다고 믿습니다",
				"HighDescription": "귀하는 모든 사람들을 위한 사회 정의와 평등을 믿습니다"
			},
			{
				"Term": "공평함",
				"LowDescription": "귀하는 사람들이 자신의 기회를 만든다고 믿습니다",
				"HighDescription": "귀하는 모든 사람들을 위한 사회 정의와 평등을 믿습니다"
			},
			{
				"Term": "지역사회봉사",
				"LowDescription": "귀하는 사람들이 간섭없이 자신의 일을 할 수 있다고 생각합니다",
				"HighDescription": "귀하는 귀하의 주변 사람들을 돌보는 것이 중요하다고 생각합니다"
			}
		],
		"value_hedonism": [
      {
			"Term": "인생의 즐거움을 즐기는 것",
			"LowDescription": "귀하는 단지 개인적인 즐거움보다 더 큰 목적을 가진 활동을 선호합니다",
			"HighDescription": "귀하는 인생을 최대한 즐기기 위해 매우 의욕적입니다"
		}],
		"value_conservation": [{
				"Term": "전통",
				"LowDescription": "귀하는 다른 사람들이 한 것을 따르는 것보다 직접 하는 것에 더 신경씁니다",
				"HighDescription": "귀하는 귀하가 소속된 그룹을 매우 존경하고 그들의 지침을 따릅니다"
			},
			{
				"Term": "조화",
				"LowDescription": "귀하는 다른 사람들이 생각하는 것이 아닌, 당신의 믿음에 근거하여 올바른 것을 결정합니다",
				"HighDescription": "귀하는 규칙은 이유가 있기 때문에 존재한다는 것을 알고 있으며, 그것을 절대 깨지 않으려고 노력합니다"
			},
			{
				"Term": "겸손",
				"LowDescription": "귀하는 다른 사람들이 생각하는 것이 아닌, 당신의 믿음에 근거하여 올바른 것을 결정합니다",
				"HighDescription": "귀하는 다른 사람들을 따를만한 가치가 있음을 알고 있습니다"
			},
			{
				"Term": "사회규범",
				"LowDescription": "귀하는 다른 사람들이 생각하는 것이 아닌, 당신의 믿음에 근거하여 올바른 것을 결정합니다",
				"HighDescription": "귀하는 규칙은 이유가 있기 때문에 존재한다는 것을 알고 있으며, 그것을 절대 깨지 않으려고 노력합니다"
			},
			{
				"Term": "안보",
				"LowDescription": "귀하는 안보는 다른 목표를 성취하기 위해 희생할 가치가 있다고 믿습니다",
				"HighDescription": "귀하는 안전과 안보은 보호해야 할 중요한 것이라고 믿습니다"
			},
			{
				"Term": "안전",
				"LowDescription": "귀하는 보안은 다른 목표를 성취하기 위해 희생할 가치가 있다고 믿습니다",
				"HighDescription": "귀하는 안전과 보안은 보호해야 할 중요한 것이라고 믿습니다"
			}
		],
		"value_self_enhancement": [{
				"Term": "성공 달성",
				"LowDescription": "귀하는 자신의 재능을 과시하는 방법을 거의 고려하지 않고 결정합니다",
				"HighDescription": "귀하는 자기자신을 나아지게 하며 귀하가 유능한 사람임을 입증 할 수있는 기회를 찾으십시오"
			},
			{
				"Term": "사회적 지위 획득",
				"LowDescription": "귀하는 귀하의 사회적 지위에 편안하고 그것을 개선할 강한 필요가 있다고 느끼지 않습니다",
				"HighDescription": "귀하는 귀하의 지위와 대중적인 이미지를 개선하는데 상당한 노력을 기울였습니다"
			},
			{
				"Term": "야망",
				"LowDescription": "귀하는 귀하의 사회적 지위에 편안하고 그것을 개선할 강한 필요가 있다고 느끼지 않습니다",
				"HighDescription": "귀하는 목표를 향해 나아가는 것이 중요하다고 느낍니다"
			},
			{
				"Term": "높은 성취감",
				"LowDescription": "귀하는 자신의 재능을 과시하는 방법을 거의 고려하지 않고 결정합니다",
				"HighDescription": "귀하는 자기자신을 계발하며 귀하가 유능한 사람임을 입증 할 수있는 기회를 찾습니다"
			}
		],
		"value_openness_to_change": [{
				"Term": "독립",
				"LowDescription": "귀하는 다른 사람들이 귀하의 활동을 지시할 때 기꺼이 받아들입니다",
				"HighDescription": "귀하는 최상의 목표달성 방법을 결정하기 위해 자신의 목표를 설정하는 것을 좋아합니다"
			},
			{
				"Term": "흥분",
				"LowDescription": "귀하는 새롭고 위험한 무언가로 시도하는 것보다는 귀하가 선호하여 이미 알고있는 것으로 일을 하고 싶어 합니다",
				"HighDescription": "귀하는 새롭고 흥미진진한 경험을 찾고 싶어합니다"
			},
			{
				"Term": "창의성",
				"LowDescription": "귀하는 새롭고 위험한 무언가로 시도하는 것보다는 귀하가 선호하여 이미 알고있는 것으로 일을 하고 싶어 합니다",
				"HighDescription": "귀하는 새롭고 흥미진진한 경험을 찾고 싶어합니다"
			},
			{
				"Term": "호기심",
				"LowDescription": "귀하는 새롭고 위험한 무언가로 시도하는 것보다는 귀하가 선호하여 이미 알고있는 것으로 일을 하고 싶어 합니다",
				"HighDescription": "귀하는 새롭고 흥미진진한 경험을 찾고 싶어합니다"
			},
			{
				"Term": "자기제어",
				"LowDescription": "귀하는 다른 사람들이 귀하의 활동을 지시할 때 기꺼이 받아들입니다",
				"HighDescription": "귀하는 최상의 목표달성 방법을 결정하기 위해 자신의 목표를 설정하는 것을 좋아합니다"
			},
			{
				"Term": "자유",
				"LowDescription": "귀하는 다른 사람들이 귀하의 활동을 지시할 때 기꺼이 받아들입니다",
				"HighDescription": "귀하는 최상의 목표달성 방법을 결정하기 위해 자신의 목표를 설정하는 것을 좋아합니다"
			}
		]
	}
}

},{}],9:[function(require,module,exports){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object ? baseValues(object, keys(object)) : [];
}

module.exports = includes;

},{}],10:[function(require,module,exports){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

},{}],11:[function(require,module,exports){
(function (global){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, props) {
  object = Object(object);
  return basePickBy(object, props, function(value, key) {
    return key in object;
  });
}

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick from.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, props, predicate) {
  var index = -1,
      length = props.length,
      result = {};

  while (++index < length) {
    var key = props[index],
        value = object[key];

    if (predicate(value, key)) {
      result[key] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [props] The property identifiers to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = baseRest(function(object, props) {
  return object == null ? {} : basePick(object, arrayMap(baseFlatten(props, 1), toKey));
});

module.exports = pick;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],12:[function(require,module,exports){
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = {
  'en': require('./en'),
  'es': require('./es'),
  'ja': require('./ja'),
  'ko': require('./ko')
};

},{"./en":13,"./es":14,"./ja":16,"./ko":17}],13:[function(require,module,exports){
'use strict';
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use static';

module.exports = require('../../../locales/v2/en.json');

},{"../../../locales/v2/en.json":1}],14:[function(require,module,exports){
'use strict';
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use static';

module.exports = require('../../../locales/v2/es.json');

},{"../../../locales/v2/es.json":2}],15:[function(require,module,exports){
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var includes = require('lodash.includes');
var keys = require('lodash.keys');
var dictionaries = require('./dictionaries');

var I18nData = function () {
  function I18nData(locale) {
    _classCallCheck(this, I18nData);

    this._locale = includes(keys(dictionaries), locale) ? locale : 'en';
    this._dictionary = dictionaries[this._locale];
  }

  _createClass(I18nData, [{
    key: 'data',
    value: function data() {
      //return keys(this._dictionary).reduce((res, k) => extend(res, this._dictionary[k]), {});
      return Object.assign({}, this._dictionary);
    }
  }, {
    key: 'translatorFactory',
    value: function translatorFactory() {
      var self = {

        /**
         * Get the value for the given key from the dictionary.
         *
         * @param dictionary A dictionary with String keys and String values.
         * @param key A key. Can contain '.' to indicate key's present in sub-dictionaries.
         *                   For example 'application.name' looks up for the 'application' key
         *                   in the dictionary and, with it's value, looks up for the 'name' key.
         * @param defaultValue A value to return if the key is not in the dictionary.
         * @returns The value from the dictionary.
         */
        getKey: function getKey(dictionary, key, defaultValue) {
          var i,
              parts = key.split('.'),
              value = dictionary;

          for (i = 0; i < parts.length; i = i + 1) {
            value = value[parts[i]];
            if (!value) {
              value = defaultValue;
              break;
            }
          }
          return value;
        },

        /**
         * Creates a translation function given a dictionary of translations
         * and an optional backup dictionary if the key is no present in the
         * first one. The key is returned if not found in the dictionaries.
         * @param translations A translation dictionary.
         * @param defaults A translation dictionary.
         * @returns {Function} A translator.
         */
        createTranslator: function createTranslator(translations, defaults) {
          defaults = defaults || {};
          var _this = this;
          return function (key) {
            var value = self.getKey(translations, key, null);
            if (value === null) {
              value = _this.getKey(defaults, key, key);
            }
            return value;
          };
        }
      };
      return self;
    }
  }]);

  return I18nData;
}();

module.exports = I18nData;

},{"./dictionaries":12,"lodash.includes":9,"lodash.keys":10}],16:[function(require,module,exports){
'use strict';
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use static';

module.exports = require('../../../locales/v2/ja.json');

},{"../../../locales/v2/ja.json":3}],17:[function(require,module,exports){
'use strict';
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use static';

module.exports = require('../../../locales/v2/ko.json');

},{"../../../locales/v2/ko.json":4}],18:[function(require,module,exports){
arguments[4][12][0].apply(exports,arguments)
},{"./en":19,"./es":20,"./ja":22,"./ko":23,"dup":12}],19:[function(require,module,exports){
'use strict';
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use static';

module.exports = require('../../../locales/v3/en.json');

},{"../../../locales/v3/en.json":5}],20:[function(require,module,exports){
'use strict';
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use static';

module.exports = require('../../../locales/v3/es.json');

},{"../../../locales/v3/es.json":6}],21:[function(require,module,exports){
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var includes = require('lodash.includes');
var keys = require('lodash.keys');
var dictionaries = require('./dictionaries');

var I18nData = function () {
  function I18nData(locale) {
    _classCallCheck(this, I18nData);

    this._locale = includes(keys(dictionaries), locale) ? locale : 'en';
    this._dictionary = dictionaries[this._locale];
  }

  _createClass(I18nData, [{
    key: 'data',
    value: function data() {
      return Object.assign({}, this._dictionary);
    }
  }, {
    key: 'translatorFactory',
    value: function translatorFactory() {
      var self = {

        /**
         * Get the value for the given key from the dictionary.
         *
         * @param dictionary A dictionary with String keys and String values.
         * @param key A key. Can contain '.' to indicate key's present in sub-dictionaries.
         *                   For example 'application.name' looks up for the 'application' key
         *                   in the dictionary and, with it's value, looks up for the 'name' key.
         * @param defaultValue A value to return if the key is not in the dictionary.
         * @returns The value from the dictionary.
         */
        getKey: function getKey(dictionary, key, defaultValue) {
          var i,
              parts = key.split('.'),
              value = dictionary;

          for (i = 0; i < parts.length; i = i + 1) {
            value = value[parts[i]];
            if (!value) {
              value = defaultValue;
              break;
            }
          }
          return value;
        },

        /**
         * Creates a translation function given a dictionary of translations
         * and an optional backup dictionary if the key is no present in the
         * first one. The key is returned if not found in the dictionaries.
         * @param translations A translation dictionary.
         * @param defaults A translation dictionary.
         * @returns {Function} A translator.
         */
        createTranslator: function createTranslator(translations, defaults) {
          defaults = defaults || {};
          var _this = this;
          return function (key) {
            var value = self.getKey(translations, key, null);
            if (value === null) {
              value = _this.getKey(defaults, key, key);
            }
            return value;
          };
        }
      };

      return self;
    }
  }]);

  return I18nData;
}();

module.exports = I18nData;

},{"./dictionaries":18,"lodash.includes":9,"lodash.keys":10}],22:[function(require,module,exports){
'use strict';
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use static';

module.exports = require('../../../locales/v3/ja.json');

},{"../../../locales/v3/ja.json":7}],23:[function(require,module,exports){
'use strict';
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use static';

module.exports = require('../../../locales/v3/ko.json');

},{"../../../locales/v3/ko.json":8}],24:[function(require,module,exports){
/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pick = require('lodash.pick');
var I18nDataV2 = require('./i18n/v2');
var I18nDataV3 = require('./i18n/v3');
var PersonalityProfileV2 = require('./profiles/v2/index');
var PersonalityProfileV3 = require('./profiles/v3/index');
var TextSummaryImpl = require('./text-summary');

var DEFAULT_OPTIONS = {
  locale: 'en',
  version: 'v2'
};

var TextSummary = function (_TextSummaryImpl) {
  _inherits(TextSummary, _TextSummaryImpl);

  function TextSummary(options) {
    _classCallCheck(this, TextSummary);

    var _options = Object.assign({}, DEFAULT_OPTIONS, pick(options, ['locale', 'version']));
    return _possibleConstructorReturn(this, (TextSummary.__proto__ || Object.getPrototypeOf(TextSummary)).call(this, _options, _options.version === 'v2' ? I18nDataV2 : I18nDataV3, _options.version === 'v2' ? PersonalityProfileV2 : PersonalityProfileV3));
  }

  _createClass(TextSummary, [{
    key: 'defaultOptions',
    value: function defaultOptions() {
      return DEFAULT_OPTIONS;
    }
  }]);

  return TextSummary;
}(TextSummaryImpl);

module.exports = TextSummary;

},{"./i18n/v2":15,"./i18n/v3":21,"./profiles/v2/index":25,"./profiles/v3/index":26,"./text-summary":27,"lodash.pick":11}],25:[function(require,module,exports){
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PersonalityProfile = function () {
  function PersonalityProfile(profile) {
    _classCallCheck(this, PersonalityProfile);

    this._traits = profile.tree.children[0].children[0].children;
    this._needs = profile.tree.children[1].children[0].children;
    this._values = profile.tree.children[2].children[0].children;
  }

  _createClass(PersonalityProfile, [{
    key: 'traits',
    value: function traits() {
      return this._traits.map(function (t) {
        return {
          id: t.id,
          name: t.name,
          category: t.category,
          score: t.percentage,
          facets: t.children.map(function (f) {
            return {
              //id: f.id,
              id: f.id.replace(/_/g, '-').replace(/ /g, '-'),
              name: f.name,
              category: f.category,
              score: f.percentage
            };
          })
        };
      });
    }
  }, {
    key: 'needs',
    value: function needs() {
      return this._needs.map(function (n) {
        return {
          id: n.id,
          name: n.name,
          category: n.category,
          score: n.percentage
        };
      });
    }
  }, {
    key: 'values',
    value: function values() {
      return this._values.map(function (v) {
        return {
          //id: v.id,
          id: v.id.replace(/_/g, '-').replace(/ /g, '-'),
          name: v.name,
          category: v.category,
          score: v.percentage
        };
      });
    }
  }]);

  return PersonalityProfile;
}();

module.exports = PersonalityProfile;

},{}],26:[function(require,module,exports){
/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PersonalityProfile = function () {
  function PersonalityProfile(profile) {
    _classCallCheck(this, PersonalityProfile);

    this._traits = profile.personality;
    this._needs = profile.needs;
    this._values = profile.values;
  }

  _createClass(PersonalityProfile, [{
    key: 'traits',
    value: function traits() {
      return this._traits.map(function (t) {
        return {
          id: t.trait_id,
          name: t.name,
          category: t.category,
          score: t.percentile,
          facets: t.children.map(function (f) {
            return {
              id: f.trait_id,
              name: f.name,
              category: f.category,
              score: f.percentile
            };
          })
        };
      });
    }
  }, {
    key: 'needs',
    value: function needs() {
      return this._needs.map(function (n) {
        return {
          id: n.trait_id,
          name: n.name,
          category: n.category,
          score: n.percentile
        };
      });
    }
  }, {
    key: 'values',
    value: function values() {
      return this._values.map(function (v) {
        return {
          id: v.trait_id,
          name: v.name,
          category: v.category,
          score: v.percentile
        };
      });
    }
  }]);

  return PersonalityProfile;
}();

module.exports = PersonalityProfile;

},{}],27:[function(require,module,exports){
/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var format = require('./utilities/format');
var comparators = require('./utilities/comparators');

var CIRCUMPLEX_ORDER_OF_PERSONALITY_TRAITS = 'EANOC';

var TextSummaryImpl = function () {
  function TextSummaryImpl(options, I18nData, PersonalityProfile) {
    _classCallCheck(this, TextSummaryImpl);

    this._version = options.version;
    this.I18nData = I18nData;
    this.PersonalityProfile = PersonalityProfile;
    this.setLocale(options.locale);
  }

  _createClass(TextSummaryImpl, [{
    key: 'setLocale',
    value: function setLocale(locale) {
      if (this._locale !== locale) {
        this._locale = locale;
        var i18n = new this.I18nData(locale);
        var dictionary = i18n.data();
        var translatorFactory = i18n.translatorFactory();
        this._translator = translatorFactory.createTranslator(dictionary.phrases);

        this.big5Data = dictionary.big5;
        this.circumplexData = dictionary.traits;
        this.facetsData = dictionary.facets;
        this.valuesData = dictionary.values;
        this.needsData = dictionary.needs;
      }
    }

    //getSummary(profile) {

  }, {
    key: 'getSummary',
    value: function getSummary(profile) {
      var personalityProfile = new this.PersonalityProfile(profile);
      return this.assemble(personalityProfile).map(function (paragraph) {
        return paragraph.join(' ');
      }).join('\n');
    }

    //assemble(tree) {

  }, {
    key: 'assemble',
    value: function assemble(profile) {
      return [this.assembleTraits(profile.traits()), this.assembleFacets(profile.traits()), this.assembleNeeds(profile.needs()), this.assembleValues(profile.values())];
    }

    //assembleTraits(personalityTree) {

  }, {
    key: 'assembleTraits',
    value: function assembleTraits(traits) {
      var sentences = [],
          big5elements = [],
          relevantBig5,
          adj1,
          adj2,
          adj3;

      // Sort the Big 5 based on how extreme the number is.
      traits.forEach(function (p) {
        big5elements.push({
          id: p.id,
          percentage: p.score
        });
      });

      big5elements.sort(comparators.compareByRelevance);

      // Remove all traits with percentage values between 32% and 68%, as it's inside the common people.
      relevantBig5 = big5elements.filter(function (item) {
        return Math.abs(0.5 - item.percentage) > 0.18;
      });

      if (relevantBig5.length < 2) {
        // Even if no Big 5 attribute is interesting, you get 1 adjective.
        relevantBig5 = [big5elements[0], big5elements[1]];
      }

      adj1 = relevantBig5.length >= 2 ? this.getCircumplexAdjective(relevantBig5[0], relevantBig5[1], 0) : null;
      adj2 = relevantBig5.length >= 3 ? this.getCircumplexAdjective(relevantBig5[1], relevantBig5[2], 1) : null;
      adj3 = relevantBig5.length >= 4 ? this.getCircumplexAdjective(relevantBig5[2], relevantBig5[3], 2) : null;

      // Generate sentences summarizing personality traits composed of cross trait phrases
      switch (relevantBig5.length) {
        case 2:
          sentences.push(format(this._translator('You are %s'), adj1) + '.');
          break;
        case 3:
          sentences.push(format(this._translator('You are %s and %s'), adj1, adj2) + '.');
          break;
        case 4:
        case 5:
          sentences.push(format(this._translator('You are %s, %s and %s'), adj1, adj2, adj3) + '.');
          break;
      }

      return sentences;
    }

    //assembleFacets(personalityTree) {

  }, {
    key: 'assembleFacets',
    value: function assembleFacets(traits) {
      var sentences = [],
          facetElements = [],
          info,
          i;

      // Assemble the full list of facets and sort them based on how extreme
      // is the number.
      traits.forEach(function (p) {
        p.facets.forEach(function (f) {
          facetElements.push({
            id: f.id,
            percentage: f.score,
            parent: p
          });
        });
      });
      facetElements.sort(comparators.compareByRelevance);

      info = this.getFacetInfo(facetElements[0]);
      sentences.push(format(this._translator('You are %s'), info.term) + ': ' + info.description + '.');
      info = this.getFacetInfo(facetElements[1]);
      sentences.push(format(this._translator('You are %s'), info.term) + ': ' + info.description + '.');

      // If all the facets correspond to the same feature, continue until a
      // different parent feature is found.
      i = 2;
      if (facetElements[0].parent === facetElements[1].parent) {
        while (facetElements[0].parent === facetElements[i].parent) {
          i += 1;
        }
      }
      info = this.getFacetInfo(facetElements[i]);
      sentences.push(format(this._translator('And you are %s'), info.term) + ': ' + info.description + '.');

      return sentences;
    }

    //assembleNeeds(needsTree) {

  }, {
    key: 'assembleNeeds',
    value: function assembleNeeds(needs) {
      var sentences = [],
          needsList = [],
          word,
          sentence;

      needs.forEach(function (n) {
        needsList.push({
          id: n.id,
          percentage: n.score
        });
      });
      needsList.sort(comparators.compareByValue);

      // Get the words required.
      var need = needsList[0];
      word = this.needsData[need.id][0];

      // Form the right sentence for the single need.
      switch (this.intervalFor(needsList[0].percentage)) {
        case 0:
          sentence = this._translator('Experiences that make you feel high %s are generally unappealing to you');
          break;
        case 1:
          sentence = this._translator('Experiences that give a sense of %s hold some appeal to you');
          break;
        case 2:
          sentence = this._translator('You are motivated to seek out experiences that provide a strong feeling of %s');
          break;
        case 3:
          sentence = this._translator('Your choices are driven by a desire for %s');
          break;
      }
      sentence = format(sentence, word).concat('.');
      sentences.push(sentence);

      return sentences;
    }
  }, {
    key: 'assembleValues',
    value: function assembleValues(values) {
      var sentences = [],
          valuesList = [],
          info1,
          info2,
          sentence,
          valuesInfo,
          i,
          term1,
          term2;

      values.forEach(function (v) {
        valuesList.push({
          id: v.id,
          percentage: v.score
        });
      });
      valuesList.sort(comparators.compareByRelevance);

      // Get all the text and data required.
      info1 = this.getValueInfo(valuesList[0]);
      info2 = this.getValueInfo(valuesList[1]);

      if (this.intervalFor(valuesList[0].percentage) === this.intervalFor(valuesList[1].percentage)) {
        // Assemble the first 'both' sentence.
        term1 = info1.term;
        term2 = info2.term;
        switch (this.intervalFor(valuesList[0].percentage)) {
          case 0:
            sentence = format(this._translator('You are relatively unconcerned with both %s and %s'), term1, term2) + '.';
            break;
          case 1:
            sentence = format(this._translator('You don\'t find either %s or %s to be particularly motivating for you'), term1, term2) + '.';
            break;
          case 2:
            sentence = format(this._translator('You value both %s and %s a bit'), term1, term2) + '.';
            break;
          case 3:
            sentence = format(this._translator('You consider both %s and %s to guide a large part of what you do'), term1, term2) + '.';
            break;
        }
        sentences.push(sentence);

        // Assemble the final strings in the correct format.
        sentences.push(info1.description + '.');
        sentences.push(format(this._translator('And %s'), info2.description.toLowerCase()) + '.');
      } else {
        valuesInfo = [info1, info2];
        for (i = 0; i < valuesInfo.length; i += 1) {
          // Process it this way because the code is the same.
          switch (this.intervalFor(valuesList[i].percentage)) {
            case 0:
              sentence = format(this._translator('You are relatively unconcerned with %s'), valuesInfo[i].term);
              break;
            case 1:
              sentence = format(this._translator('You don\'t find %s to be particularly motivating for you'), valuesInfo[i].term);
              break;
            case 2:
              sentence = format(this._translator('You value %s a bit more'), valuesInfo[i].term);
              break;
            case 3:
              sentence = format(this._translator('You consider %s to guide a large part of what you do'), valuesInfo[i].term);
              break;
          }
          sentence = sentence.concat(': ').concat(valuesInfo[i].description.toLowerCase()).concat('.');
          sentences.push(sentence);
        }
      }

      return sentences;
    }

    /**
    *  getCircumplexAdjective generates a qualified cross trait phrase given two personality traits, p1 and p2
    *  p1 and p2: personality traits of the form {"id":<id>,"percentage":<percentage>}
    *  order: determines which qualifier to use for the cross trait adjective
    *      e.g., terms that are viewed negatively in Western culture are qualified with 'a bit' or 'somewhat'
    *         0: 'a bit'
    *         1: 'somewhat'
    *         2: 'can be perceived as'
    *  Returns the qualified cross trait adjective phrase for p1 and p2.
    */

  }, {
    key: 'getCircumplexAdjective',
    value: function getCircumplexAdjective(p1, p2, order) {
      var version = this._version;
      var ordered = [p1, p2].sort(function (o1, o2) {
        var i1, i2;
        if (version === 'v3') {
          i1 = CIRCUMPLEX_ORDER_OF_PERSONALITY_TRAITS.indexOf(o1.id.replace('big5_', '').charAt(0).toUpperCase());
          i2 = CIRCUMPLEX_ORDER_OF_PERSONALITY_TRAITS.indexOf(o2.id.replace('big5_', '').charAt(0).toUpperCase());
        } else {
          i1 = CIRCUMPLEX_ORDER_OF_PERSONALITY_TRAITS.indexOf(o1.id.charAt(0));
          i2 = CIRCUMPLEX_ORDER_OF_PERSONALITY_TRAITS.indexOf(o2.id.charAt(0));
        }
        return i1 < i2 ? -1 : 1;
      });

      // Assemble the identifier as the JSON file stored it.
      var identifier = ordered[0].id.concat(ordered[0].percentage > 0.5 ? '_plus_' : '_minus_').concat(ordered[1].id).concat(ordered[1].percentage > 0.5 ? '_plus' : '_minus');

      var traitMult = this.circumplexData[identifier][0];
      var sentence = '%s';

      if (traitMult.perceived_negatively) {
        switch (order) {
          case 0:
            sentence = this._translator('a bit %s');
            break;
          case 1:
            sentence = this._translator('somewhat %s');
            break;
          case 2:
            sentence = this._translator('can be perceived as %s');
            break;
        }
      }

      return format(sentence, traitMult.word);
    }
  }, {
    key: 'getValueInfo',
    value: function getValueInfo(v) {
      return {
        name: v.id,
        term: this.valuesData[v.id][0].Term.toLowerCase(),
        description: v.percentage > 0.5 ? this.valuesData[v.id][0].HighDescription : this.valuesData[v.id][0].LowDescription
      };
    }
  }, {
    key: 'getFacetInfo',
    value: function getFacetInfo(f) {
      return {
        name: f.id,
        term: f.percentage > 0.5 ? this.facetsData[f.id].HighTerm.toLowerCase() : this.facetsData[f.id].LowTerm.toLowerCase(),
        description: f.percentage > 0.5 ? this.facetsData[f.id].HighDescription.toLowerCase() : this.facetsData[f.id].LowDescription.toLowerCase()
      };
    }
  }, {
    key: 'getFacet',
    value: function getFacet(id) {
      var facet = this.facetsData[id];
      if (facet) {
        return Object.assign({}, facet);
      } else {
        return null;
      }
    }
  }, {
    key: 'getTrait',
    value: function getTrait(id) {
      var trait = this.big5Data[id];
      if (trait) {
        return Object.assign({}, trait);
      } else {
        return null;
      }
    }
  }, {
    key: 'intervalFor',
    value: function intervalFor(p) {
      return Math.min(Math.floor(p * 4), 3);
    }
  }]);

  return TextSummaryImpl;
}();

module.exports = TextSummaryImpl;

},{"./utilities/comparators":28,"./utilities/format":29}],28:[function(require,module,exports){
"use strict";

/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function compareByRelevance(o1, o2) {
  var result = 0;

  if (Math.abs(0.5 - o1.percentage) > Math.abs(0.5 - o2.percentage)) {
    result = -1; // A trait with 1% is more interesting than one with 60%.
  }

  if (Math.abs(0.5 - o1.percentage) < Math.abs(0.5 - o2.percentage)) {
    result = 1;
  }

  return result;
}

function compareByValue(o1, o2) {
  var result = 0;

  if (Math.abs(o1.percentage) > Math.abs(o2.percentage)) {
    result = -1; // 100 % has precedence over 99%
  }

  if (Math.abs(o1.percentage) < Math.abs(o2.percentage)) {
    result = 1;
  }

  return result;
}

module.exports = {
  compareByRelevance: compareByRelevance,
  compareByValue: compareByValue
};

},{}],29:[function(require,module,exports){
'use strict';

/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Given a template string to format and serveral strings
 * to fill the template, it returns the formatted string.
 * @param template This is a string containing zero, one or
 *                 more occurrences of "%s".
 * @param ...strings
 * @returns The formattted template.
 */
function format(subject) {
  'use strict';

  var replaces = Array.prototype.slice.apply(arguments, [1, arguments.length]),
      parts = null,
      output,
      i;

  if (subject.match(/%s/g) === null && replaces.length > 0 || replaces.length !== subject.match(/%s/g).length) {
    throw 'Format error: The string count to replace do not matches the argument count. Subject: ' + subject + '. Replaces: ' + replaces;
  }

  output = subject;
  for (i = 1; i < arguments.length; i += 1) {
    parts = output.split('%s');
    output = parts[0] + arguments[i] + parts.slice(1, parts.length).join('%s');
  }

  return output;
}

module.exports = format;

},{}]},{},[24])(24)
});
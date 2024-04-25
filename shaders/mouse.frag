#version 330 core

in vec4 frontColor;
out vec4 fragColor;

in vec2 vtexCoord;

const vec4 BLANC = vec4(1,1,1,1);
const vec4 NEGRE = vec4(0,0,0,1);
const vec4 GRIS = vec4(0.8,0.8,0.8,1);
const vec4 PELL = vec4(1.0, 0.8, 0.6,1);

void main()
{

	vec2 lear = vec2(0.2,0.8);
	vec2 rear = vec2(0.8,0.8);
	vec2 head = vec2(0.5,0.4);
	float learDist = distance(vtexCoord,lear);
	float rearDist = distance(vtexCoord,rear);
	float headDist = distance(vtexCoord,head);
	
	vec2 lcara = vec2(0.45,0.35);
	vec2 rcara = vec2(0.55,0.35);
	vec2 mouth = vec2(0.35,0.35);
	float lcaraDist = distance(vtexCoord*vec2(1,0.7),lcara);
	float rcaraDist = distance(vtexCoord*vec2(1,0.7),rcara);
	float mouthDist = distance(vtexCoord*vec2(0.7,1.2),mouth);
	
	vec2 lull = vec2(0.5,0.3);
	vec2 rull = vec2(0.6,0.3);
	vec2 lin = vec2(0.5,0.26);
	vec2 rin = vec2(0.6,0.26);
	float lullDist = distance(vtexCoord*vec2(1.1,0.6),lull);
	float rullDist = distance(vtexCoord*vec2(1.1,0.6),rull);
	float linDist = distance(vtexCoord*vec2(1.1,0.6),lin);
	float rinDist = distance(vtexCoord*vec2(1.1,0.6),rin);
	
	fragColor = GRIS;
	if (learDist <= 0.2 || rearDist <= 0.2 || headDist <= 0.35) fragColor = NEGRE;
	if (lcaraDist <= 0.15 || rcaraDist <= 0.15 || mouthDist <= 0.20) fragColor = PELL;
	if (lullDist <= 0.1 || rullDist <= 0.1) fragColor = BLANC;
	if (linDist <= 0.05 || rinDist <= 0.05) fragColor = NEGRE;
}

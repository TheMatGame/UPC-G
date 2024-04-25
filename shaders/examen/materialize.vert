#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform float time;
uniform vec3 boundingBoxMin, boundingBoxMax;
uniform sampler2D noise;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;

void main()
{
	float diagonal = distance(boundingBoxMin,boundingBoxMax);
	float factorAmplitud = diagonal/10.0; 
	
	vec3 BRMin = vec3(0,0,0);
	vec3 BRMax = boundingBoxMax - boundingBoxMin;
	vec3 relvert = (vertex-boundingBoxMin)/BRMax;
	
	float t = smoothstep(1,0,time);
	
	vec4 Tnoise = texture(noise, vec2(vertex.x,vertex.y)) * factorAmplitud;
	vec4 vert = vec4(vertex,1.0) * t;
	
    vec3 N = normalize(normalMatrix * normal);
    frontColor = (vec4(color,1.0) * N.z)*(1-t) + t*vec4(1,1,1,1);
    vtexCoord = texCoord;
    gl_Position = modelViewProjectionMatrix * vert;
}
